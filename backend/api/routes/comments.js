const express = require('express');
const commentsRoute = express.Router( );
const CommentController = require('../controllers/CommentController');
const isAuthenticated = require('../middlewares/isAuthenticated');

commentsRoute.post('/comments/:podcast_id/new', isAuthenticated, CommentController.store);
commentsRoute.get('/comments', CommentController.filter);

module.exports = commentsRoute;