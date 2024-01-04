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

export const add = (t1: Tuple, t2: Tuple) => {
  return tuple(
    t1.x + t2.x,
    t1.y + t2.y,
    t1.z + t2.z,
    t1.w + t2.w,
  )
}

export const subtract = (t1: Tuple, t2: Tuple) => {
  return tuple(
    t1.x - t2.x,
    t1.y - t2.y,
    t1.z - t2.z,
    t1.w - t2.w,
  )
}

export const multiply = (t1: Tuple, scalar: number) => {
  return tuple(
    t1.x * scalar,
    t1.y * scalar,
    t1.z * scalar,
    t1.w * scalar,
  )
}

export const divide = (t1: Tuple, scalar: number) => {
  return tuple(
    t1.x / scalar,
    t1.y / scalar,
    t1.z / scalar,
    t1.w / scalar,
  )
}

export const negate = (t1: Tuple) => multiply(t1, -1)
