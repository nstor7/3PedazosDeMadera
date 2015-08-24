var $navegacion = document.getElementById('nav');
var $menu = document.getElementById('menu');
var $body = document.querySelector('body');
var body = new Hammer($body);



var desplegar = function(){
   $navegacion.classList.add('activo')
};

var esconder = function(){
    $navegacion.classList.remove('activo');
};

body.on('panright', desplegar);
body.on('panleft', esconder);