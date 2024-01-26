const express = require("express");
const app = express();
// const { data } = require("./currencies.json");
// const user = require('./users.json');
const userRoutes = require("./routes/users.routes");
const currencyRoutes = require("./routes/currencies.routes");
const PORT = 8082;

//Currensies Routes
app.use("/currencies", currencyRoutes);

// Users Routes
app.use("/users", userRoutes);
app.listen(PORT, () => {
  console.log("server is running on PORT 8082");
});


// If we define routes in different folder in that case we use app.use() in main file(index.js).
