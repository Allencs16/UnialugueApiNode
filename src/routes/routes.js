const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/novoUsuario', UserController.novoUsuario);
router.get('/buscaUsuarios', UserController.buscarUsuarios);

module.exports = router;