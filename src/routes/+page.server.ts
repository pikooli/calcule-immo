import * as db from '$lib/server/db.js';

export function load({ cookies }) {
	console.log('db.getData()', db.getData());
	return {
		data: db.getData(),
		aaa: 'aaaa'
	};
}

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		db.createData(data.get('name')?.toString() ?? '');
	}
};
