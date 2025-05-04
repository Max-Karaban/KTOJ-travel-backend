// models/trip.js
module.exports = {
  createTripObject: (dtoIn) => {
    return {
      id: crypto.randomUUID(),           // unique trip ID
      title: dtoIn.title,                // trip title
      description: dtoIn.description,    // description
      startDate: dtoIn.startDate,        // start date
      endDate: dtoIn.endDate,            // end date
      tripType: dtoIn.tripType,          // trip type
      interests: dtoIn.interests || [],  // interests (optional)
      route: dtoIn.route || []           // route (array of cities)
	
    };
  }
};

