const { Coach, Rutina } = require("../db.js");
const bcrypt = require("bcrypt"); // npm install bcrypt

// Obtener un coach por ID
const getCoachById = async (req, res) => {
    try {
     const {coach_ID} = req.params
      const coach = await Coach.findByPk(coach_ID, {
        include: [
          {
            model: Rutina,
          },
        ],
      });
      if (coach) {
        return res.json(coach);
      } else {
        return res.status(404).json({ error: "Entrenador no encontrado." });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error al obtener el entrenador." });
    }
  };

  
const createCoach = async (req, res) => {
    try {
      const { name, email, image, password } =
        req.body;
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const [newCoach, created] = await Coach.findOrCreate({
        where: {
          name,
          email,
          password: hashedPassword,
          contact,
          image,
        },
        default: {
          email,
        },
      });
      if (!created){
        return res.status(400).json("ya existe un vendedor con ese email");
      }

      res.status(201).json(newCoach);
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        res.status(400).json({ error: "El email ya está registrado." });
      } else {
        console.error(error);
        res.status(500).json({
          error: "Error al crear el vendedor.",
          errorMessage: error.message,
        });
      }
    }
  };

  module.exports = {
    getCoachById,
    createCoach,
  };
  