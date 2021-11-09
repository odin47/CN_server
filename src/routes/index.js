import express from 'express';
import { getNews } from '../controllers';

const indexRouter = express.Router();
indexRouter.get('/news', getNews);

export default indexRouter;
