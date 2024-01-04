import { equals } from "../util"

export interface Tuple {
  x: number
  y: number
  z: number
  w: number
}

export const isPoint = (t: Tuple) => equals(t.w, 1)
export const isVector = (t: Tuple) => equals(t.w, 0)

export const tuple = (x: number, y: number, z: number, w: number): Tuple => ({
  x, y, z, w
})

export const point = (x: number, y: number, z: number): Tuple => ({
  x, y, z, w: 1
})

export const vector = (x: number, y: number, z: number): Tuple => ({
  x, y, z, w: 0
})
