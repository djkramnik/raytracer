import { Tuple, add, divide, hadamard, multiply, subtract } from "../tuple"

export interface Color {
  r: number
  g: number
  b: number
}

export const color = (r: number, g: number, b: number): Color => ({
  r, g, b
})

export const toColor = ({
  x,
  y,
  z,
}: Tuple): Color => ({
  r: x,
  g: y,
  b: z,
})

export const toTuple = ({
  r,
  g,
  b
}: Color): Tuple => ({
  x: r,
  y: g,
  z: b,
  w: 0,
})

const makeColorOp = (
  op: (t1: Tuple, t2: Tuple) => Tuple
) => {
  return function ColorOp(c1: Color, c2: Color) {
    return toColor(op(toTuple(c1), toTuple(c2)))
  }
}

const makeScalarOp = (
  op: (t1: Tuple, n: number) => Tuple
) => {
  return function ScalarOp(c1: Color, n: number) {
    return toColor(op(toTuple(c1), n))
  }
}

export const addColor = makeColorOp(add)
export const subtractColor = makeColorOp(subtract)
export const hadamardColor = makeColorOp(hadamard)
export const multiplyColor = makeScalarOp(multiply)
export const divideColor = makeScalarOp(divide)




