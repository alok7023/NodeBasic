const express = require("express");
const app = express();
// const { data } = require("./currencies.json");
// const user = require('./users.json');
const {
  getUsersData,
  getUserById,
  searchUsersByQuery,
} = require("./controllers/users.controllers");
const currencyRoutes = require("./routes/currencies.routes");
const PORT = 8082;

//Currensies Routes
app.use("/", currencyRoutes);

// Users Routes
// Note: Always put static routes before dynamic routes.
app.get("/users", getUsersData);
app.get("/users/search", searchUsersByQuery);
app.get("/users/:uuid", getUserById);

app.listen(PORT, () => {
  console.log("server is running on PORT 8082");
});
