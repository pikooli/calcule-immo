import type { ImmoStore } from '$lib/stores/immo';
import { computeAmount, computePercent } from '$lib/utils/math';

export const computeNotaryFeeAmount = (values: ImmoStore) =>
	computeAmount(values.amount, values.notaryFeesPercent);
export const computenotaryFeePercent = (values: ImmoStore) =>
	computePercent(values.notaryFees, values.amount);
