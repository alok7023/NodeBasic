const express = require("express");
const app = express();

const userRoutes = require("./routes/users.routes");
const currencyRoutes = require("./routes/currencies.routes");
const PORT = 8082;

//Currensies Routes
app.use("/currencies", currencyRoutes);

// Users Routes
// Note: Always put static routes before dynamic routes.
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log("server is running on PORT 8082");
});
