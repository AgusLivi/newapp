const { Router } = require('express');

//controlador usuarios
const userController = require('../Controllers/User/userController')
const login = require('../Controllers/User/loginController')

//controlador Rutinas
const RoutineController = require('../Controllers/Rutina/RutinaControllers')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/create', userController.createUser)
router.post('/login', login.login)
router.get('/getalluser', userController.getAllUsersByCoach)

//Routines
router.post('/rcreate', RoutineController.createTipoRutina)
router.post('/ecreate', RoutineController.createExercise)

module.exports = router;
