const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");



const port = process.env.PORT || 3000;
//database

//Estou dizendo para o Express usar o EJS com View Enine
app.set("view engine", "ejs");
app.use(express.static("public"));

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function() {
  console.log('Servidor rodando na porta'+port);
});