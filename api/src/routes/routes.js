const { Router } = require('express');

//controlador usuarios
const userController = require('../Controllers/userController')
const login = require('../Controllers/loginController')



// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/create', userController.createUser )
router.post('/login', login.login)


module.exports = router;
