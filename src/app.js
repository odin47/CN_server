import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';
import cors from 'cors';;

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({origin: '*'}));
app.use('/api/v1', indexRouter);
app.use((err, req, res) => {
	console.log(res);
	res.status(400).json({ error: err.stack });
});

export default app;
