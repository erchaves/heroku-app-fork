import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import auth from './middleware/auth';
import notFound from './middleware/notFound';
import error from './middleware/error';
import router from './router';

const app = express();

app.use(auth);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static('public'), notFound);
app.get('*', router);
app.use(error);

export default app;
