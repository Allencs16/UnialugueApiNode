const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

//rotas de usuario
router.post('/novoUsuario', UserController.novoUsuario);
router.put('/editaUsuario', UserController.editaUsuario);
router.get('/buscaUsuarios', UserController.buscarUsuarios);

module.exports = router;