const express = require('express');
const cors = require('cors');

const router = require('./src/routes/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(router)

app.listen(4000, ()=>{
  console.log("App rodando na porta 4000");
})

app.get('/', (req, res) => {
  res.send({
    message: "Está API esta rodando com docker"
  });
})