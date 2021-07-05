const express = require("express");
const app = express();

app.set('view engine','ejs'); // parametro p utilizar renderizador ejs
app.use(express.static('public'));

app.get("/:nome/:lang",(req,res) =>{
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;

    var produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "Coca-Cola", preco: 5},
        {nome: "Leite", preco: 4.00}
    ];

    res.render("index",{
        nome: nome,
        lang: lang,
        empresa:"Guia do Programador",
        inscritos:8040,
        msg: exibirMsg,
        produtos: produtos
    });

});

app.listen(8080,()=>{
    console.log("Sistema rodando!");
});