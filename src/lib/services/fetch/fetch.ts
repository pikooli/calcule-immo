import { PUBLIC_DEV_URL, PUBLIC_PROD_URL, PUBLIC_LOCAL } from '$env/static/public';

export const fetchApi = async (url: string, options = {}) => {
	const baseUrl = PUBLIC_LOCAL === 'dev' ? PUBLIC_DEV_URL : PUBLIC_PROD_URL;
	const fullUrl = `${baseUrl}${url}`;

	return fetch(fullUrl, options);
};
