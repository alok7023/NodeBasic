const router = require("express").Router();

const {
  getCurrenciesData,
  getCurrenciesDataById,
} = require("../controllers/currencies.controllers");

router.get("/currencies", getCurrenciesData);
router.get("/currencies/:symbol", getCurrenciesDataById);


module.exports = router;
