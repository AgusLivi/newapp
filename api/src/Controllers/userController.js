const { User, Coach } = require("../db.js");
const bcrypt = require("bcrypt"); // npm install bcrypt

// Obtener un usuario por ID
// const getUserById = async (req, res) => {
//   try {
//     // desestructuro el token de los headers pero se puede mandar por query o params
//     const login = req.user;
//     if (!login)
//       return res.status(401).json("Debe tener una cuenta para acceder");
//     if (login.rol !== "user")
//       return res.status(401).json("Debe acceder como usuario");
//     const user = await User.findByPk(login.id);
//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).json({ error: "Usuario no encontrado." });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al obtener el usuario." });
//   }
// };

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
    
    // Accede al coach asociado al usuario (si existe)
    const coach = await Coach.findOne({
      where: {
        userId: newUser.id, // Ajusta esto según cómo estén definidas tus relaciones
      },
    });

    if (coach) {
      // Asignar el coach a todos los usuarios
      await User.update(
        { coachId: coach.id }, // Ajusta esto según cómo estén definidas tus relaciones
        { where: {} } // Esto actualiza todos los usuarios
      );
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

module.exports = {
  createUser,
};