var ruta = require('express').Router();
module.exports = (function(app) {
	// body...
	ruta.get('/', function(req, res){
		respuesta.send("Service started!")
	});

	var usuario = require('../controladores/ControladorUsuario.js')(app);
	var contacto = require('../controladores/ControladorContacto.js')(app);
	

	//Rutas de usuario
	//[METHOD : POST]sql
	ruta.post('/usuario/registro', usuario.registro);
	ruta.post('/usuario/login', usuario.login);

	//Rutas de contacto
	ruta.get('/contacto', contacto.list);
	ruta.post('/contacto', contacto.add);
	ruta.put('/contacto', contacto.edit);
	ruta.delete('/contacto', contacto.delete);

	return ruta;
});