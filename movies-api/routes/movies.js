const express = require('express');
const MoviesService = require('../services/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  router.get('/', async function(req, res, next) {
    const { tags } = req.query;
    try {
      const movies = await moviesService.getMovies({ tags });

      res.status(200).json({
        data: movies,
        message: 'Movies listed'
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:movieId', async function(req, res, next) {
    const { movieId } = req.params.movieId;
    try {
      const movie = await moviesService.getMovie({ movieId });

      res.status(200).json({
        data: movie,
        message: 'Movie retrieved'
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async function(req, res, next) {
    const { body: movie } = req;
    try {
      const createdMovieId = await moviesService.createMovie({ movie });

      res.status(201).json({
        data: createdMovieId,
        message: 'Movie created'
      });
    } catch (error) {
      next(error);
    }
  });

  router.put('/:movieId', async function(req, res, next) {
    const { movieId } = req.params;
    const { body: movie } = req;
    try {
      const updatedMovieId = await moviesService.updateMovie({
        movieId,
        movie
      });

      res.status(200).json({
        data: updatedMovieId,
        message: 'Movie updated'
      });
    } catch (error) {
      next(error);
    }
  });

  router.patch('/:movieId', async function(req, res, next) {
    const { movieId } = req.params;
    try {
      const patchedMovieId = await moviesService.patchMovie({ movieId });

      res.status(200).json({
        data: patchedMovieId,
        message: 'Movie patched'
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:movieId', async function(req, res, next) {
    const { movieId } = req.params;
    try {
      const deletedMovieId = await moviesService.deleteMovie({ movieId });

      res.status(200).json({
        data: deletedMovieId,
        message: 'Movie deleted'
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = moviesApi;
