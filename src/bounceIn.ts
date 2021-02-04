import { bounceOut } from './bounceOut'

export function bounceIn(t: number): number {
  return 1 - bounceOut(1 - t)
}