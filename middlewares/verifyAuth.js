const PASSWORD = process.env.ROUTE_PASSWORD;
const verifyAuth = (req, res, next) => {
  const authorization = req.headers["authorization"];
  if (!authorization) {
    return res.status(401).json({ message: "unauthorized" });
  }

  if (authorization !== PASSWORD) {
    return res.status(401).json({ message: "unauthorized" });
  }
  next(); //passes the request to the next object in line
};

module.exports = verifyAuth;
