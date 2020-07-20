import { Router } from 'express';
import usersRouter from './users.routes';
import favoritesRouter from './favorites.routes';

const routes = Router();

routes.use('/users', usersRouter);

routes.use('/favorites', favoritesRouter);

export default routes;
