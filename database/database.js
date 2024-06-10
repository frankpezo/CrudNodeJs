const mysql = require('mysql');

//Conexión a la base de datos
const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

conexion.connect((error) => {
    if (error) {
        console.log(`Error de conexión: ${error}`);
        return;
    } else {
        console.log('Conexión a la base de datos correcta');
    }
});

//Exportamos
module.exports = conexion;