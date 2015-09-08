console.log('Arrancando el servidor de 3PM');
var express = require('express');
var parcero = require('body-parser');
var app = express();
app.use(parcero.urlencoded({extended:true}));
var servidor;

servidor = app.listen(8280, function(){
    console.log('Servidor Arrancado')
});

app.use(express.static('pagina'));