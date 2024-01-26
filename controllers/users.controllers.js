const { data } = require("../users.json");
const getQueryErrors = require("../validators/users.validators");

const PASSWORD = process.env.ROUTE_PASSWORD;

const verifyAuth = (req, res) => {
  const authorization = req.headers["authorization"];
  console.log(authorization);
  if(authorization !== PASSWORD){
    return res.status(403).json({message : 'unauthorized'})
  }

}

const getUsersData = (req, res) => {
  res.send(data);
};



const getUserById = (req, res) => {
  const { uuid } = req.params;
  const result = data.find((item) => item.login.uuid === uuid);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
};

const searchUsersByQuery = (req, res) => {
  verifyAuth(req,res);
  const { gender, age } = req.query;

  //Validation start
  const error = getQueryErrors({age, gender});
  if(error){
    return res.status(422).json(error);
  }
 // Validation end

  if (gender && age) {
    const results = data.filter(
      (item) => item.gender === gender && Number(item.dob.age) >= Number(age)
    );
    res.json(results);
  } else if (gender) {
    const results = data.filter((item) => item.gender === gender);
    res.json(results);
  } else if (age) {
    const results = data.filter((item) => Number(item.dob.age) >= Number(age));
    res.json(results);
  } else {
    res.sendStatus(404);
  }
};

module.exports = { getUsersData, getUserById, searchUsersByQuery };
