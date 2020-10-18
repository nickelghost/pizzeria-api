import express from 'express';
import bodyParser from 'body-parser';

import config from './config';
import router from './router';

const app = express();

app.use(bodyParser.json());
app.use('/', router);

app.listen(config.port, () => console.log(`Listening on :${config.port}`));
