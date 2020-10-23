import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import config from './api/config';
import router from './api/router';

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: config.bodySizeLimit }));
app.use('/', router);

app.listen(config.port, () => console.log(`Listening on :${config.port}`));
