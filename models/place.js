// models/place.js
const crypto = require("crypto");

module.exports = {
  createPlaceObject: (dtoIn) => {
    return {
      id: crypto.randomUUID(),           // unique place ID
      tripId: dtoIn.tripId,              // ID of related trip
      name: dtoIn.name,                  // place name
      location: dtoIn.location,          // location
      description: dtoIn.description,    // description
      note: dtoIn.note || ""             // optional user note
    };
  }
};
