export function quarticOut(t: number): number {
  return Math.pow(t - 1, 3) * (1 - t) + 1
}