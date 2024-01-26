const router = require("express").Router();

const {
  getUsersData,
  getUserById,
  searchUsersByQuery,
} = require("../controllers/users.controllers");
const validateSearchQuery = require("../middlewares/validateSearchQuery");

// Note: Always put static routes before dynamic routes.
router.get("/", getUsersData);
router.get("/search", validateSearchQuery, searchUsersByQuery);
router.get("/:uuid", getUserById);

module.exports = router;

/* If I define routes in index.js page then we define 
routes using app.get() method but If I define routes in seperate 
routes folder than it uses router.get().*/
