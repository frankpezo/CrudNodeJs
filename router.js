//Definción de rutas
const express = require('express');
const router = express.Router();

const dotenv = require('dotenv');
dotenv.config({ path: './env/.env' });

//Importamos la conexión del mysql
const conexion = require('./database/database.js');

//Rutas 
router.get('/', (req, res) => {
    conexion.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index', { results: results })
        }
    });
});


//Para realiar el registros
router.get('/create', (req, res) => {
    res.render('create')

});

//Invocamos el método del crud para poder hacer el registro
const crud = require('./controllers/crud.js');
router.post('/save', crud.save);



//Lo exportamos 
module.exports = router;