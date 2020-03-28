const express = require('express');

const OngController = require('./controllers/OngController'); 
const IncidentsController = require('./controllers/incidentController'); 
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

//Ongs Routes
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Incidentes Routes
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

//Profiles Routes
routes.get('/profile', ProfileController.index);

module.exports = routes;