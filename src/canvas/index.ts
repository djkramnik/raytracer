import { Color, color } from "../color"
import { coordConverter } from "../util/coord"

export interface Canvas {
  w: number,
  h: number,
  pixels: Array<Color>
  write: (r: number, c: number, []: [number, number, number]) => void
  read: (r: number, c: number) => Color
}

export const canvas = (w: number, h: number): Canvas => {
  const coords = coordConverter(w)
  const pixels = Array(w * h).fill(color(0, 0, 0))
  return {
    w,
    h,
    pixels,
    write: (r: number, c: number, [red, g, b]: [number, number, number]) => {
      pixels[coords.toIndex(r, c)] = color(red, g, b)
    },
    read: (r: number, c: number) => {
      return pixels[coords.toIndex(r, c)]
    }
  }
}

// to ppm formatted string
export const toPpm = (c: Canvas): string => {
  return `P3
  ${c.w} ${c.h}
  255
  `
}


