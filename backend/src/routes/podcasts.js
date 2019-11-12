const express = require('express');
const podcastRoute = express.Router( );
const podcastController = require('../controllers/PodcastController');
const isAuthenticated = require('../middlewares/isAuthenticated');

podcastRoute.get('/podcast', podcastController.filter);
podcastRoute.get('/podcasts', podcastController.index);
podcastRoute.post('/podcasts/new', isAuthenticated, podcastController.store);

module.exports = podcastRoute;