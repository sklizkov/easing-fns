const PI = Math.PI

export function sineInOut(t: number): number {
  return -(Math.cos(t * PI) - 1) / 2
}