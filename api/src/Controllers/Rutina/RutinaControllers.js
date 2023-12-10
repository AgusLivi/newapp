const { TipoRutina, User } = require('../models');

const createTipoRutina = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const userId = req.user.id; 

        // Verificar que el usuario sea un coach
        const user = await User.findByPk(userId);
        if (!user || !user.coach) {
            return res.status(403).json({ error: 'No autorizado. Se requiere el rol de coach.' });
        }

        // Crear el tipo de rutina
        await TipoRutina.create({ nombre, descripcion, coachId: userId });

        res.status(201).json({ message: 'Tipo de rutina creado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el tipo de rutina' });
    }
};

const { Exercise } = require('../models');

const createExercise = async (req, res) => {
    try {
        const { nombre } = req.body;
        const userId = req.user.id; 
        
        // Verificar que el usuario sea un coach
        const user = await User.findByPk(userId);
        if (!user || !user.coach) {
            return res.status(403).json({ error: 'No autorizado. Se requiere el rol de coach.' });
        }

        // Crear el ejercicio
        await Exercise.create({ nombre });

        res.status(201).json({ message: 'Ejercicio creado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el ejercicio' });
    }
};


module.exports = {
    createTipoRutina,
    createExercise,
};