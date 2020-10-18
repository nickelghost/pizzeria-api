import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import config from './config';
import router from './router';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

app.listen(config.port, () => console.log(`Listening on :${config.port}`));
