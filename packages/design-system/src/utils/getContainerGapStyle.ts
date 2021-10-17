import { getSizeValueByType, SizeValueType } from './getSizeValueByType';

export type ContainerGapType =
  | SizeValueType
  | [SizeValueType]
  | [SizeValueType, SizeValueType];

export function getContainerGapStyle(gap: ContainerGapType) {
  if (!Array.isArray(gap)) {
    return getSizeValueByType(gap);
  }

  const [row, column] = gap;

  if (!column) {
    return getSizeValueByType(row);
  }

  return `${getSizeValueByType(row)} ${getSizeValueByType(column)}`;
}
