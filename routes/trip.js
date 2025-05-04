// routes/trip.js
const express = require("express");
const router = express.Router();
const tripController = require("../controllers/tripController");

router.post("/create", tripController.createTrip); // POST /trip/create
router.get("/list", tripController.listTrips);
router.post("/update", tripController.updateTrip); // POST /trip/update
router.post("/delete", tripController.deleteTrip); // POST /trip/delete

module.exports = router;
