const HALF_PI = Math.PI / 2

export function sineOut(t: number): number {
  return Math.sin(t * HALF_PI)
}