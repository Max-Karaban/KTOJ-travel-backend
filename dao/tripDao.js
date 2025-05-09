const fs = require("fs");
const path = require("path");
const tripFilePath = path.join(__dirname, "trips.json");

function list() {
  if (!fs.existsSync(tripFilePath)) return [];
  const fileData = fs.readFileSync(tripFilePath, "utf-8");
  return fileData ? JSON.parse(fileData) : [];
}

function saveAll(trips) {
  fs.writeFileSync(tripFilePath, JSON.stringify(trips, null, 2), "utf-8");
}

function create(trip) {
  const trips = list();
  trips.push(trip);
  saveAll(trips);
  return trip;
}

module.exports = {
  list,
  create,
  saveAll
};
