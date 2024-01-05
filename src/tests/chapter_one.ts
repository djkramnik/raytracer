import { 
    tuple,
    vector,
    point,
    isPoint,
    isVector,
    add,
    subtract,
    negate,
    multiply,
    divide,
    magnitude,
    normalize,
    cross,
  } from '../tuple'
import { maybePrefix } from '../util/string'
import { getExpect } from '../util/test'

export const chapterOne = (testPrefix?: string) => {
  const expect = getExpect(testPrefix)
  const logTest = (name: string) => console.log(maybePrefix(`${name} tests passed!`, testPrefix))
  
  // tuple
  const tupleA = tuple(4.3, -4.2, 3.1, 1.0)
  expect(tupleA.x).toBe(4.3)
  expect(tupleA.y).toBe(-4.2)
  expect(tupleA.z).toBe(3.1)
  expect(tupleA.w).toBe(1.0)
  expect(isPoint(tupleA)).toBe(true)
  expect(isVector(tupleA)).toBe(false)
  logTest('tuple A')

  const tupleB = tuple(4.3, -4.2, 3.1, 0)
  expect(tupleB.x).toBe(4.3)
  expect(tupleB.y).toBe(-4.2)
  expect(tupleB.z).toBe(3.1)
  expect(tupleB.w).toBe(0.0)
  expect(isPoint(tupleB)).toBe(false)
  expect(isVector(tupleB)).toBe(true)
  logTest('tuple B')

  // point
  const p = point(4, -4, 3)
  expect(p.x).toBe(4)
  expect(p.y).toBe(-4)
  expect(p.z).toBe(3)
  expect(isPoint(p)).toBe(true)
  logTest('point constructor')

  // vector
  const v = vector(4, -4, 3)
  expect(v.x).toBe(4)
  expect(v.y).toBe(-4)
  expect(v.z).toBe(3)
  expect(isVector(v)).toBe(true)
  logTest('vector constructor')

  // add
  expect(add(
    tuple(3, -2, 5, 1),
    tuple(-2, 3, 1, 0),
  )).toEqual(tuple(1, 1, 6, 1))
  logTest('add op')

  // subtract
  expect(subtract(
    tuple(3, -2, 5, 1),
    tuple(-2, 3, 1, 0),
  )).toEqual(tuple(5, -5, 4, 1))

  expect(subtract(
    point(3,2,1),
    point(5,6,7)
  )).toEqual(vector(-2,-4,-6))

  expect(subtract(
    point(3,2,1),
    vector(5,6,7)
  )).toEqual(point(-2,-4,-6))
  logTest('subtract op')

  // negate
  expect(negate(tuple(1, -2, 3, -4)))
    .toEqual(tuple(-1, 2, -3, 4))
  logTest('negate op')

  // multiply
  expect(multiply(tuple(1, -2, 3, -4), 3.5))
    .toEqual(tuple(3.5, -7, 10.5, -14))
  expect(multiply(tuple(1, -2, 3, -4), 0.5))
    .toEqual(tuple(0.5, -1, 1.5, -2))

  logTest('multiply op')
  
  // divide
  expect(divide(tuple(1, -2, 3, -4), 2))
  .toEqual(tuple(0.5, -1, 1.5, -2))

  logTest('divide op')

  expect(magnitude(vector(1, 0, 0))).toBe(1)
  expect(magnitude(vector(0, 1, 0))).toBe(1)
  expect(magnitude(vector(1, 2, 3))).toBe(14 ** 0.5)
  expect(magnitude(vector(-1, -2, -3))).toBe(14 ** 0.5)
  logTest('magnitude')

  expect(normalize(vector(4, 0, 0))).toEqual(vector(1, 0, 0))
  expect(normalize(vector(1, 2, 3)))
    .toEqual(vector(0.26726, 0.53452, 0.80178))
  logTest('normalize')

  const a = vector(1, 2, 3)
  const b = vector(2, 3, 4)

  expect(cross(a, b)).toEqual(vector(-1, 2, -1))
  expect(cross(b, a)).toEqual(vector(1, -2, 1))
  logTest('cross')
}