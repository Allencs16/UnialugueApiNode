const database = require('../database/connection');

class UserController {
  novoUsuario(req, res){
    const { nome, cpf, idade } = req.body

    database.insert({nome, cpf, idade}).table("usuario").then(data => {
      console.log(data);
      res.json({ message: 'Usuario criado com sucesso!' })
    }).catch(error => {
      console.log(error);
    })
  }

  editaUsuario(req, res){
    const { id, nome, cpf, senha, idade } = req.body;

    database.table('usuario').where('id', id).update({nome, cpf, senha, idade}).then(data => {
      res.json(data)
    }).catch(error => console.log(error))
  }

  buscarUsuarios(req, res){
    database.select('*').table('usuario').then(data => {
      res.json(data);
    }).catch(error => console.log(error));
  }
}

module.exports = new UserController;