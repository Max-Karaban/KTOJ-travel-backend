const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const tripRoutes = require("./routes/trip");
const placeRoutes = require("./routes/place");
app.use("/trip", tripRoutes);
app.use("/place", placeRoutes);

app.get("/", (req, res) => {
  res.send("Travel Planner backend is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
