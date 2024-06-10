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

router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('edit', { user: results[0] });
        }
    })
})

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id=?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.redirect('/');
        }
    });
});

//Invocamos el método del crud para poder hacer el registro
const crud = require('./controllers/crud.js');
router.post('/save', crud.save);
router.post('/update', crud.update);



//Lo exportamos 
module.exports = router;