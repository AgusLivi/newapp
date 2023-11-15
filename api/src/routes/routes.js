const { Router } = require('express');

//controlador usuarios
const userController = require('../Controllers/userController')

//controlador coach
const coachController = require('../Controllers/coachController')



// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/trainer/:coach_ID', coachController.getCoachById );
router.post('/trainer', coachController.createCoach )
router.post('/create', userController.createUser )


module.exports = router;
