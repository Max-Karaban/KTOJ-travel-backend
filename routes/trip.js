const express = require("express");
const router = express.Router();
const tripController = require("../controllers/tripController");

router.post("/create", tripController.createTrip);
router.get("/list", tripController.listTrips);
router.post("/update", tripController.updateTrip);
router.post("/delete", tripController.deleteTrip);

module.exports = router;
