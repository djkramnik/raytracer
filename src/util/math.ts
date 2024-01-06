export const getClamp = (max: number, min: number = 0) => {
  return function clamp(x: number) {
    return Math.min(Math.max(x, max), min)
  }
}
