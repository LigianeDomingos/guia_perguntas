const express = require("express"); // import express
const app = express(); // iniciando express

app.get("/", function(req,res){
    res.send("Bem vindo ao App!");
});

// criando rotas com parametros não obrigatorio
app.get("/blog/:artigo?", function(req,res){

    let artigo = req.params.artigo;

    if(artigo){
        res.send("<h2> Artigo:" + artigo + "<h2>");
    }
    // res.send("Bem vindo ao meu blog!");
});

// query params
app.get("/canal/youtube", function(req,res){
    let canal = req.query["canal"];
    if(canal){
        res.send(canal)
    }else{
        res.send("Nenhum canal fornecido!")
    }
    // res.send("Bem vindo ao meu canal!");
});

// criando rotas com parametros
app.get("/ola/:nome/:empresa", function(req,res){
    // req: enviado pelo usuario
    // res: resposta à requisição ao usuario
    let nome = req.params.nome;
    let empresa = req.params.empresa;
    res.send("<h1>Oi " + nome + " do " + empresa + "!<h1>");
});

app.listen(4000,function(erro){
    if(erro){
        console.log("ocorreu um erro");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})
