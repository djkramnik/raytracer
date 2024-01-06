export const coordConverter = (numCols: number) => {
  return {
    toIndex: (x: number, y: number) => {
      return (y * numCols) + x
    },
    toCoord: (index: number) => {
      return [
        Math.floor(index % numCols),
        Math.floor(index / numCols),
      ]
    }
  }
}