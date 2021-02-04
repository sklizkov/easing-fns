export function cubicOut(t: number): number {
  const _t = t - 1

  return _t * _t * _t + 1
}