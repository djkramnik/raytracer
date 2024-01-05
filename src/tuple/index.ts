import { equals } from "../util"
import { maybePrefix } from "../util/string"

export interface Tuple {
  x: number
  y: number
  z: number
  w: number
}

export interface Environment {
  gravity: Tuple
  wind: Tuple
}

export interface Projectile {
  position: Tuple
  velocity: Tuple
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

export const projectile = (t1: Tuple, t2: Tuple): Projectile => {
  return {
    position: t1,
    velocity: t2
  }
}

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

export const magnitude = ({
  x, y, z, w
}: Tuple) => (x**2 + y**2 + z**2 + w**2) ** 0.5

export const normalize = (v: Tuple) => {
  const m = magnitude(v)
  return tuple(
    v.x / m,
    v.y / m,
    v.z / m,
    v.w / m,
  )
}

export const dot = (t1: Tuple, t2: Tuple) => {
  return t1.x * t2.x +
    t1.y * t2.y + 
    t1.z * t2.z + 
    t1.w * t2.w
}

export const cross = (v1: Tuple, v2: Tuple) => {
  return vector(
    v1.y * v2.z - v1.z * v2.y,
    v1.z * v2.x - v1.x * v2.z,
    v1.x * v2.y - v1.y * v2.x,
  )
}

export const logTuple = (t1: Tuple, prefix?: string) => {
  console.log(maybePrefix(`${t1.x}, ${t1.y}, ${t1.z}, ${t1.w}`, prefix))
}



