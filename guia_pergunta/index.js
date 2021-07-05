 const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

// database method   Promisses

connection.authenticate()
.then(()=> {
    console.log("Conexão feita com o banco de dados!")
})
.catch((msgErro)=>{
    console.log(msgErro);
})



app.set('view engine','ejs'); // parametro p utilizar renderizador ejs
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/perguntar",(req,res)=>{
    res.render("perguntar");
});

app.post("/salvarpergunta",(req, res) =>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulário recebido! titulo " + titulo +" " + "descricao" + descricao);
});

app.listen(3000,()=>{
    console.log("Sistema rodando!");
});HTMLBaseElement