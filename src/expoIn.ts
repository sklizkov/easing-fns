export function expoIn(t: number): number {
  if (t === 0) {
    return t
  } else {
    return Math.pow(2, (t - 1) * 10)
  }
}