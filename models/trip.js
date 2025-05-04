module.exports = {
  createTripObject: (dtoIn) => {
    return {
      id: crypto.randomUUID(),
      title: dtoIn.title,
      description: dtoIn.description,
      startDate: dtoIn.startDate,
      endDate: dtoIn.endDate,
      tripType: dtoIn.tripType,
      interests: dtoIn.interests || [],
      route: dtoIn.route || []
    };
  }
};

