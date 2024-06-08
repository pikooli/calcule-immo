import type { ImmoStore } from '$lib/stores/immo';
import { computeAmount, computePercent } from '$lib/utils/math';

export const computeAgencyAmount = (values: ImmoStore) =>
	computeAmount(values.amount, values.agencyFeesPercent);
export const computeAgencyPercent = (values: ImmoStore) =>
	computePercent(values.agencyFees, values.amount);
