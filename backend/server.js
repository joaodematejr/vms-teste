const express = require('express');

let app = express();

app.listen(9000, '127.0.0.1', () => {
    console.log('Servidor Rodando !');
});