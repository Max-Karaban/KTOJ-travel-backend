const tripDao = require("../dao/tripDao");
const { createTripObject } = require("../models/trip");

function createTrip(req, res) {
  const dtoIn = req.body;

  if (!dtoIn.title || !dtoIn.startDate || !dtoIn.endDate || !dtoIn.tripType || !dtoIn.route) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  if (new Date(dtoIn.startDate) > new Date(dtoIn.endDate)) {
    return res.status(400).json({ error: "Start date must be before end date" });
  }
  if (dtoIn.route.length < 2) {
    return res.status(400).json({ error: "At least two cities required in route" });
  }

  const trip = createTripObject(dtoIn);
  const result = tripDao.create(trip);

  res.status(201).json(result);
}

function listTrips(req, res) {
  const trips = tripDao.list();
  res.json(trips);
}

function updateTrip(req, res) {
  const dtoIn = req.body;

  if (!dtoIn.id) {
    return res.status(400).json({ error: "Trip ID is required." });
  }

  const trips = tripDao.list();
  const index = trips.findIndex(t => t.id === dtoIn.id);

  if (index === -1) {
    return res.status(404).json({ error: "Trip not found." });
  }

  const updatedTrip = { ...trips[index], ...dtoIn };
  trips[index] = updatedTrip;
  tripDao.saveAll(trips);

  res.json(updatedTrip);
}

function deleteTrip(req, res) {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: "Trip ID is required." });
  }

  const trips = tripDao.list();
  const index = trips.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Trip not found." });
  }

  trips.splice(index, 1);
  tripDao.saveAll(trips);

  res.json({ success: true, deletedTripId: id });
}

module.exports = {
  createTrip,
  listTrips,
  updateTrip,
  deleteTrip
};
