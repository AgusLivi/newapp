const { Router } = require('express');


//controlador usuarios
const userController = require('../Controllers/User/userController')
const login = require('../Controllers/User/loginController')
//controlador Rutinas
const RoutineController = require('../Controllers/Rutina/RutinaControllers')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// Middleware de autenticación (aplicado solo a rutas protegidas)

const JWT = require("../Middlewares/JWT");

const router = Router();


// Configurar los routers
// Rutas públicas
router.post('/create', userController.createUser);
router.post('/login', login.login);
// Rutas protegidas que requieren autenticación
//Coach
router.use(JWT)
router.get('/getById', userController.getUserById)
router.get('/getalluser', userController.getAllUsersByCoach)
//Routines
router.post('/rcreate', RoutineController.createTipoRutina)
router.post('/ecreate', RoutineController.createExercise)

module.exports = router;
