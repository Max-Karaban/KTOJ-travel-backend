const crypto = require("crypto");

module.exports = {
  createPlaceObject: (dtoIn) => {
    return {
      id: crypto.randomUUID(),
      tripId: dtoIn.tripId,
      name: dtoIn.name,
      location: dtoIn.location,
      description: dtoIn.description,
      note: dtoIn.note || ""
    };
  }
};
