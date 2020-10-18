import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import router from './router';

dotenv.config();

const config = {
  port: Number(process.env.APP_PORT) || 3000,
};

const app = express();

app.use(bodyParser.json());
app.use('/', router);

app.listen(config.port, () => console.log(`Listening on :${config.port}`));
