const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

appuse(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);