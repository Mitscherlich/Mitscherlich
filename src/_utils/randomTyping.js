import { random } from '../_utils'

const IS_CN_REGEXP = /[\u4E00-\u9FA5]/g

export function randomTyping(string = '') {
  // increase one character for each chinese word
  const words = string.length + string.match(IS_CN_REGEXP)?.length ?? 0

  let n = words / 1800

  if (n < 1) {
    n = 1
  }

  return random(n - 0.2, n + 0.2) * 1000
}
