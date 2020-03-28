const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());//Configura quem pode acessar a API
app.use(express.json());
app.use(routes);

app.listen(3333);