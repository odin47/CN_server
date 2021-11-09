import { getNewsList } from "../services";

const getNews = async (req, res) => {
	const result = await getNewsList(req.query.keyword ? req.query.keyword : 'world');
	res.status(200).json(result.articles);
};

export { getNews };