const express = require('express');
const correios = require('correios.js');

const app = express();

app.get('/track', function (req, res) {
    const { code } = req.query;
    
    correios.track(code).then((response) => {
        res.status(200);
        res.send(response);
    }).catch((error) => {
        res.status(500);
        res.send(error);
    })
});

app.listen(3002, function () {
    console.log('Microsserviço iniciado na porta 3002');
});
