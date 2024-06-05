//Lo necesario para expresss
const express = require('express');
const app = express();

use.set('view engine', 'ejs'); //Para poder utilizar la plantilla 



app.get('/', (req, res) => {
    res.send('Página principal')
});


PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor en funcionamiento')
});

