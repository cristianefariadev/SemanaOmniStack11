const express = require('express');

const app = express();

app.get('/users', (request, response) => {
  return response.json({
    evento: 'Semana Omnistack',
    aluna: 'Cristiane Faria'
  })
})

app.listen(3333);