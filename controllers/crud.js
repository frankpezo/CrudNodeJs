const conexion = require('../database/database.js');

//Caputramos datos del formulario
exports.save = (req, res) => {
    const user = req.body.user;
    const rol = req.body.rol;

    conexion.query('INSERT INTO users SET ?', { nombre: user, rol: rol }, (error, results) => {
        if (error) {
            throw error;
        } else {
            res.redirect('/');
        }
    });
}