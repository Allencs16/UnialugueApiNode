var knex = require('knex')({

  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'banco_unialugue'
  }

});

module.exports = knex