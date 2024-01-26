const { data } = require("../currencies.json");

const getCurrenciesData = (req, res) => {
  const { min_value } = req.query;
  if (min_value) {
    const result = data.filter(
      (item) => Number(item.min_size) === Number(min_value)
    );
    res.send(result);
  } else {
    res.send(data);
  }
};

const getCurrenciesDataById = (req, res) => {
  const { symbol } = req.params;
  const result = data.find(
    (item) => item.id.toLowerCase() === symbol.toLowerCase()
  );
  if (result) {
    res.status(200).json(result);
  } else {
    // res.sendStatus(404); // status code
    res.status(404).json({ message: "Invalid Symbol" }); //we can write in both ways.
  }
};

module.exports = {getCurrenciesData, getCurrenciesDataById};
