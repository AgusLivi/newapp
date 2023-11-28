const { User } = require("../db.js");
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken"); 
const {JWT_SECRET} = process.env

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Buscar al usuario por su email
   const user = await User.findOne({ where: {email}})
    // Verificar si el usuario existe
    if (user) {
      // Comparamos la contraseña proporcionada con la almacenada en la base de datos
      const passwordMatch = await bcrypt.compare(password, user.password);
      
      if (passwordMatch) {
        // Generamos un token de autenticación
        const token = jwt.sign(
          { id: user.user_ID },
          JWT_SECRET
        );
        res.json({ token }); // Devuelve el token como respuesta
      } else {
        res.status(401).json({ error: "Contraseña incorrecta." });
      }
    } else {
      res.status(404).json({ error: "Usuario no encontrado." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al iniciar sesión." });
  }
};
module.exports = { login };