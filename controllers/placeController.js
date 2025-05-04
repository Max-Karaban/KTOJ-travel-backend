const placeDao = require("../dao/placeDao");
const tripDao = require("../dao/tripDao");
const { createPlaceObject } = require("../models/place");

function createPlace(req, res) {
  const dtoIn = req.body;

  if (!dtoIn.tripId || !dtoIn.name) {
    return res.status(400).json({ error: "tripId and name are required." });
  }

  const trips = tripDao.list();
  const tripExists = trips.some(t => t.id === dtoIn.tripId);
  if (!tripExists) {
    return res.status(404).json({ error: "Trip not found." });
  }

  const place = createPlaceObject(dtoIn);
  const result = placeDao.create(place);

  res.status(201).json(result);
}

function listPlacesByTripId(req, res) {
  const tripId = req.query.tripId;
  if (!tripId) {
    return res.status(400).json({ error: "tripId is required." });
  }

  const places = placeDao.listByTripId(tripId);
  res.json(places);
}

function updatePlace(req, res) {
  const dtoIn = req.body;

  if (!dtoIn.id) {
    return res.status(400).json({ error: "Place ID is required." });
  }

  const places = placeDao.list();
  const index = places.findIndex(p => p.id === dtoIn.id);

  if (index === -1) {
    return res.status(404).json({ error: "Place not found." });
  }

  const updatedPlace = { ...places[index], ...dtoIn };
  places[index] = updatedPlace;
  placeDao.saveAll(places);

  res.json(updatedPlace);
}

function deletePlace(req, res) {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: "Place ID is required." });
  }

  const places = placeDao.list();
  const index = places.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Place not found." });
  }

  places.splice(index, 1); // удаляем
  placeDao.saveAll(places);

  res.json({ success: true, deletedPlaceId: id });
}

module.exports = {
  createPlace,
  listPlacesByTripId,
  updatePlace,
  deletePlace
};

