import { Router } from 'express';

import FavoritesRepository from '../repositories/FavoritesRepositories';

const favoritesRouter = Router();
const favoritesRepository = new FavoritesRepository();

favoritesRouter.get('/:id', (req, res) => {
  const { id } = req.params;

  const favorite = favoritesRepository.list(id);

  return res.json(favorite);
});

favoritesRouter.post('/:id', (req, res) => {
  const { id } = req.params;

  const { imdbID } = req.body;

  const favorite = favoritesRepository.create(id, imdbID);

  return res.json(favorite);
});

favoritesRouter.delete('/:id/:imdb', (req, res) => {
  const { id, imdb } = req.params;

  const favorite = favoritesRepository.remove(id, imdb);

  return res.json(favorite);
});

export default favoritesRouter;
