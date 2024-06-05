//Definción de rutas
const express = require('express');
const router = express.Router();

const dotenv = require('dotenv');
dotenv.config({ path: './env/.env' });

//Importamos la conexión del mysql
const conexion = require('./database/database.js');

//Rutas 
router.get('/', (req, res) => {
    res.send('Página principal');
})


//Lo exportamos 
module.exports = router;