const { User } = require("../../db.js");
const bcrypt = require("bcrypt"); // npm install bcrypt

// Obtener un usuario por ID
const getUserById = async (req, res) => {
  try {
    // desestructuro el token de los headers
    const login = req.user;
    if (!login)
      return res.status(401).json("Debe tener una cuenta para acceder");
    const user = await User.findByPk(login.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "Usuario no encontrado." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el usuario." });
  }
};

// Controlador para crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const { name, email, password, } = req.body;

    // Genera un hash seguro de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10); // 10 es el costo (número de rondas de hashing)

    const [newUser, created] = await User.findOrCreate({
      where: {
        name,
        email,
        password: hashedPassword, // Almacena el hash en lugar de la contraseña en texto claro
      },
      default: {
        email,
      },
    });

    if (!created) {
      return res.status(400).json("ya existe un usuario con ese email");
    }
    res.status(201).json(newUser);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.status(400).json({ error: "El email ya está registrado." });
    } else {
      console.error(error);
      res.status(500).json({ error: "Error al crear el usuario." });
    }
  }
};


const getAllUsersByCoach = async (req, res) => {
    try {
        const coachId = req.user.id; 

        // Verificar que el usuario sea un coach
        const coach = await User.findOne({ where: { id: coachId, coach: true } });
        if (!coach) {
            return res.status(403).json({ error: 'No autorizado. Se requiere el rol de coach.' });
        }

        // Obtener todos los usuarios
        const users = await User.findAll();

        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la lista de usuarios' });
    }
};

module.exports = {
  createUser,
  getUserById,
  getAllUsersByCoach,
};