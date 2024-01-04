import { 
    tuple,
    vector,
    point,
    isPoint,
    isVector,
    add,
    subtract,
    negate,
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

  // divide
}