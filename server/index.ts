import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import routes from './routes.js'
import * as dotenv from 'dotenv'
dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/', routes);

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log('Server listening on port', port);
})