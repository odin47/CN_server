import axios from 'axios';
import { API_KEY, DOMAIN_URL } from '../settings';

const getService = async (url) => {
	try {
		console.log(`${DOMAIN_URL}/${url}&apiKey=${API_KEY}`);
		const response = await axios.get(
			`${DOMAIN_URL}/${url}&apiKey=${API_KEY}`
		);
		return response.data;
	} catch (err) {
		console.log(err);
	}
};

export default getService;
