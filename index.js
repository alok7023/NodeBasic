require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/users.routes");
const currencyRoutes = require("./routes/currencies.routes");
const verifyAuth = require("./middlewares/verifyAuth");
const app = express();

const PORT = 8082;

app.use(verifyAuth);
//Currensies Routes
app.use("/currencies", currencyRoutes);

// Users Routes
// Note: Always put static routes before dynamic routes.
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log("server is running on PORT 8082");
});
