import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => res.json({ message: 'Okay' }));

app.listen(3333, () => {
  console.log('Server running on port 3333');
});
