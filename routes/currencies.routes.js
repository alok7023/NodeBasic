const router = require("express").Router();

const {
  getCurrenciesData,
  getCurrenciesDataById,
} = require("../controllers/currencies.controllers");

router.get("/", getCurrenciesData);
router.get("/:symbol", getCurrenciesDataById);

module.exports = router;
