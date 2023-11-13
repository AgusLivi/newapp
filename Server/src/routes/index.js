const express = require("express");
const router = express.Router();


//controladores
const userController = require('../controllers/userController')
const coachController = require('../controllers/coachController');



//rutas usuarios
router.post('/users/', userController.createUser)
router.get('/users/:id', userController.getUserById)

//rutas coach 
router.post('/trainer/', coachController.createCoach)
router.get('/coach/', coachController.getCoachById)