export interface Canvas {
  w: number,
  h: number,
}

export const canvas = (w: number, h: number): Canvas => ({
  w, h,
})


