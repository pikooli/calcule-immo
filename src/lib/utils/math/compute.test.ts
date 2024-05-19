import { computeAmount, computePercent } from './compute';
import { describe, it, expect } from 'vitest';

describe('ComputeAmount', () => {
	it('10% of 100', () => {
		const result = computeAmount(100, 10);
		expect(result).toEqual(10);
	});
	it('0% of 200', () => {
		const result = computeAmount(200, 0);
		expect(result).toEqual(0);
	});

	it('30% of 300', () => {
		const result = computeAmount(300, 30);
		expect(result).toEqual(90);
	});

	it('99% of 200', () => {
		const result = computeAmount(200, 99);
		expect(result).toEqual(198);
	});

	it('999% of 200', () => {
		const result = computeAmount(200, 999);
		expect(result).toEqual(1998);
	});

	it('-200% of 200', () => {
		const result = computeAmount(200, -200);
		expect(result).toEqual(-400);
	});
});

describe('computePercent', () => {
	it('10 of 100', () => {
		const result = computePercent(10, 100);
		expect(result).toEqual(10);
	});
	it('0 of 200', () => {
		const result = computePercent(0, 200);
		expect(result).toEqual(0);
	});

	it('90 of 300', () => {
		const result = computePercent(90, 300);
		expect(result).toEqual(30);
	});

	it('189 of 200', () => {
		const result = computePercent(198, 200);
		expect(result).toEqual(99);
	});

	it('400 of 200', () => {
		const result = computePercent(400, 200);
		expect(result).toEqual(200);
	});

	it('-400 of 200', () => {
		const result = computePercent(-400, 200);
		expect(result).toEqual(-200);
	});
});
