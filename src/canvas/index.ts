import { Color, color } from "../color"
import { coordConverter, getClamp } from "../util"

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

const clamp = getClamp(255)

const toRgb = (n: number) => Math.round(clamp(n * 255))

// where color values are fractions 0 and 1 and we want 255 based color values
const toColorValue = ({r, g, b}: Color): string => {
  return [
    toRgb(r),
    toRgb(g),
    toRgb(b),
  ].join(' ')
}

// to ppm formatted string
export const toPpm = (canvas: Canvas): string => {
  const header = `P3\n${canvas.w} ${canvas.h}\n255`
  const data = canvas.pixels.reduce((acc, p, index) => {
    const newLine = ((index + 1) % canvas.w) === 0
    return acc.concat(toColorValue(p))
      .concat(
        newLine ? '\n' : ' '
      )
  }, '')
  
  return `${header}\n${data}`.trim()
}

export const ppmToFile = (ppm: string) => {
  
}


