// routes/place.js
const express = require("express");
const router = express.Router();
const placeController = require("../controllers/placeController");

router.post("/create", placeController.createPlace); // POST /place/create
router.get("/listByTripId", placeController.listPlacesByTripId); // GET /place/listByTripId?tripId=...
router.post("/update", placeController.updatePlace); // POST /place/update
router.post("/delete", placeController.deletePlace); // POST /place/delete

module.exports = router;
