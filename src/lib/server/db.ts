// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
const db = new Map();

export function getData() {
	return db.get('data');
}

export function createData(data: string) {
	db.set('data', data);
}

export function deleteData() {
	db.clear();
}
