//Lo necesario para expresss
const express = require('express');
const app = express();

app.set('view engine', 'ejs'); //Para poder utilizar la plantilla 

//Importamos el router y env
const router = require('./router.js');
app.use('/', router);




PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor en funcionamiento')
});

