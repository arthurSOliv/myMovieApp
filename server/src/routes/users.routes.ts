import { Router } from 'express';
import bcrypt from 'bcrypt';

import UsersRepository from '../repositories/UsersRepositories';

const usersRouter = Router();
const usersRepository = new UsersRepository();

usersRouter.get('/:email/:password', async (req, res) => {
  try {
    const { email, password } = req.params;

    const user = await usersRepository.findUser(email, password);

    return res.json(user);
  } catch (error) {
    return res.json({ message: 'User not found' });
  }
});

usersRouter.post('/', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 8);

    const user = usersRepository.create(username, email, hashedPassword);

    return res.json(user);
  } catch (error) {
    return res.json({ message: error });
  }
});

export default usersRouter;
