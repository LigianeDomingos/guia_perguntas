var http = require("http");

http.createServer(function(requisicao,resposta){
    resposta.end("<h1>Bem vindo ao meu site!<h1> <br> <h5>Ligiane<h5>");
}).listen(3000);

console.log("meu seridor esta rodando!");