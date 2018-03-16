import express from 'express';
import body from 'body-parser';
import router from './routes';

const PORT = process.env.SERVER_PORT;

require('./database');
require('./database/setup');

const app = express();

app.use(body.urlencoded({ extended: false }));
app.use(body.json());

app.use('/api', router);

//serve static files

app.listen(PORT, () => console.log('Cloner server is listening on port:', PORT));
