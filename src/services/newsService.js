import getService from "./request";

const getNewsList = async (keyword) => {
	const url = `v2/everything?q=${keyword}`;
	const data = await getService(url);
	return data
}

export {getNewsList}