const { Router } = require('express');
const passport = require('passport');

//controlador usuarios
const userController = require('../Controllers/User/userController')
const login = require('../Controllers/User/loginController')
//controlador Rutinas
const RoutineController = require('../Controllers/Rutina/RutinaControllers')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Middleware de autenticación (aplicado solo a rutas protegidas)
router.use(['/getalluser', '/rcreate', '/ecreate'], passport.authenticate('jwt', { session: false }));

// Configurar los routers
// Rutas públicas
router.post('/create', userController.createUser);
router.post('/login', login.login);

// Rutas protegidas que requieren autenticación
//Coach
router.get('/getalluser', userController.getAllUsersByCoach)
//Routines
router.post('/rcreate', RoutineController.createTipoRutina)
router.post('/ecreate', RoutineController.createExercise)

module.exports = router;
