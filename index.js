require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/users.routes");
const currencyRoutes = require("./routes/currencies.routes");
const verifyAuth = require("./middlewares/verifyAuth");
const blogRoutes = require("./routes/blogs.routes");
const mongoose = require("mongoose");

const app = express();

const PORT = 8082;
const DB_URI = "mongodb://127.0.0.1:27017";
mongoose
  .connect(`${DB_URI}`)
  .then(() => console.log("Connected to DB at", DB_URI))
  .catch((e) => console.log("Failed to connect to DB", e));

app.use(express.json());
app.use("/blogs", blogRoutes);

app.use(verifyAuth);
//Currensies Routes
app.use("/currencies", currencyRoutes);

// Users Routes
// Note: Always put static routes before dynamic routes.
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log("server is running on PORT 8082");
});
