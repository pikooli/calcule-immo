import { formatNumber } from './formatNumber';
import { describe, it, expect } from 'vitest';

describe('FormatNumber', () => {
	it('100000 become "100 000"', () => {
		const result = formatNumber(100000);
		expect(result).toEqual('100\u202f000');
	});

	it('1000.1 become "1 000.1"', () => {
		const result = formatNumber(1000.1);
		expect(result).toEqual('1\u202f000,1');
	});

	it('1020000.921 become "1020.921"', () => {
		const result = formatNumber(1020000.921);
		expect(result).toEqual('1\u202f020\u202f000,92');
	});
});
