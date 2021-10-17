import { isString } from './typeCheckUtils';

export type SizeValueType = string | number;

export function getSizeValueByType(value: SizeValueType) {
  return isString(value) ? value : `${value}px`;
}
