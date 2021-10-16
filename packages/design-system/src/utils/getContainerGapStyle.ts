import { isString } from './typeCheckUtils';

export type GapValueType = string | number;

export type ContainerGapType =
  | GapValueType
  | [GapValueType]
  | [GapValueType, GapValueType];

function getValueByType(value: GapValueType) {
  return isString(value) ? value : `${value}px`;
}

export function getContainerGapStyle(gap: ContainerGapType) {
  if (!Array.isArray(gap)) {
    return getValueByType(gap);
  }

  const [row, column] = gap;

  if (!column) {
    return getValueByType(row);
  }

  return `${getValueByType(row)} ${getValueByType(column)}`;
}
