const express = require('express');
const routes = express.Router();

const UserControlerr = require('./controllers/UserController');
const NewControlerr = require('./controllers/NewController');

routes.get('/users', UserControlerr.index);
routes.get('/users/:id', UserControlerr.show);
routes.post('/users', UserControlerr.create)
routes.put('/users/:id', UserControlerr.update);
routes.delete('/users/:id', UserControlerr.delete);

routes.get('/news', NewControlerr.index);
routes.post('/news', NewControlerr.create)
routes.put('/news/:id', NewControlerr.update);
routes.delete('/news/:id', NewControlerr.delete);

module.exports = routes;

