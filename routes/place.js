const express = require("express");
const router = express.Router();
const placeController = require("../controllers/placeController");

router.post("/create", placeController.createPlace);
router.get("/listByTripId", placeController.listPlacesByTripId);
router.post("/update", placeController.updatePlace);
router.post("/delete", placeController.deletePlace);

module.exports = router;
