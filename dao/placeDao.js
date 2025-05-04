// dao/placeDao.js
const fs = require("fs");
const path = require("path");

const placeFilePath = path.join(__dirname, "places.json");

function list() {
  if (!fs.existsSync(placeFilePath)) return [];
  const fileData = fs.readFileSync(placeFilePath, "utf-8");
  return fileData ? JSON.parse(fileData) : [];
}

function listByTripId(tripId) {
  return list().filter(place => place.tripId === tripId);
}

function saveAll(places) {
  fs.writeFileSync(placeFilePath, JSON.stringify(places, null, 2), "utf-8");
}

function create(place) {
  const places = list();
  places.push(place);
  saveAll(places);
  return place;
}

module.exports = {
  list,
  listByTripId,
  create,
  saveAll 
}
