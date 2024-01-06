export const coordConverter = (w: number) => {
  return {
    toIndex: (r: number, c: number) => {
      return (r * w) + c
    },
    toCoord: (index: number) => {
      return [
        Math.floor(index / w),
        Math.floor(index % w),
      ]
    }
  }
}