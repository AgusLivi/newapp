const jwt = require("jsonwebtoken"); 
const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  const { token } = req.headers;
  // valido q efectivamente llege un token
  if (!token) return res.status(401).json("Debe tener una cuenta para acceder");
  // decodifico la info q llega en el token
  else {
    const decode = jwt.verify(token, JWT_SECRET);
    req.user = decode;
    console.log("decoddeadao", decode);
    next();
  }
};