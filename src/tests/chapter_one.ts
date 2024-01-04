import { tuple, isPoint, isVector } from '../tuple'
import { getExpect } from '../util/test'

export const chapterOne = (testPrefix?: string) => {
  const expect = getExpect(testPrefix)
  
  const tupleA = tuple(4.3, -4.2, 3.1, 1.0)
  expect(tupleA.x).toBe(4.3)
  expect(tupleA.y).toBe(-4.2)
  expect(tupleA.z).toBe(3.1)
  expect(tupleA.w).toBe(1.0)
  expect(isPoint(tupleA)).toBe(true)
  expect(isVector(tupleA)).toBe(false)
  console.log(`${testPrefix}: tupleA tests passed`)

  const tupleB = tuple(4.3, -4.2, 3.1, 0)
  expect(tupleB.x).toBe(4.3)
  expect(tupleB.y).toBe(-4.2)
  expect(tupleB.z).toBe(3.1)
  expect(tupleB.w).toBe(1.0)
  expect(isPoint(tupleB)).toBe(false)
  expect(isVector(tupleB)).toBe(true)
  console.log(`${testPrefix}: tupleB tests passed`)
}