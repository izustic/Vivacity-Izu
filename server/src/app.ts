import express from 'express';
import cors from 'cors';
import routes from './routes/routes';
import { PORT } from './config/index';

const app = express();

app.use(cors());
app.use(express.json());


app.use('/awesome', routes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
