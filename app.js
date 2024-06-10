//Lo necesario para expresss
const express = require('express');
const app = express();

app.set('view engine', 'ejs'); //Para poder utilizar la plantilla 
app.use(express.urlencoded({ extended: false })); //Para poder capturar los datos del formulario
app.use(express.json());

app.use('/recursos', express.static('public'));
app.use('/recursos', express.static(__dirname + '/public'))

//Importamos el router y env
const router = require('./router.js');
app.use('/', router);




PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor en funcionamiento')
});

