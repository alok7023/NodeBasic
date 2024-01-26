const joi = require("joi");

// joi is used for validation of data.
const schema = joi
  .object()
  .keys({
    age: joi.number().integer().min(0).max(100),
    gender: joi.string().lowercase().valid("male", "female"),
  })
  .or("age", "gender");

const getQueryErrors = (data) => {
  const result = schema.validate(data);
  return result.error;
};

module.exports = getQueryErrors;
