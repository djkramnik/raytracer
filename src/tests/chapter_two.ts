import { canvas } from "../canvas"
import { addColor, color, hadamardColor, multiplyColor, subtractColor } from "../color"
import { coordConverter } from "../util/coord"
import { maybePrefix } from "../util/string"
import { getExpect } from "../util/test"

export const chapterTwo = (testPrefix: string = 'chapter two') => {
  const expect = getExpect(testPrefix)
  const logTest = (name: string) => console.log(maybePrefix(`${name} tests passed!`, testPrefix))

  // color
  const colorA = color(1, 2, 3)
  expect(colorA.r).toBe(1)
  expect(colorA.g).toBe(2)
  expect(colorA.b).toBe(3)
  logTest('color')

  // add color
  expect(
    addColor(
      color(0.9, 0.6, 0.75),
      color(0.7, 0.1, 0.25),
    )
  ).toEqual(
    color(1.6, 0.7, 1.0)
  )
  logTest('add')

  // subtract color
  expect(
    subtractColor(
      color(0.9, 0.6, 0.75),
      color(0.7, 0.1, 0.25),
    )
  ).toEqual(
    color(0.2, 0.5, 0.5)
  )
  logTest('subtract')

  // scalar multiply
  expect(
    multiplyColor(
      color(0.2, 0.3, 0.4),
      2
    )
  ).toEqual(color(0.4, 0.6, 0.8))
  logTest('scalar multiply')

  // hadamar 
  expect(
    hadamardColor(
      color(1, 0.2, 0.4),
      color(0.9, 1, 0.1),
    )
  ).toEqual(color(0.9, 0.2, 0.04))
  logTest('hadamard')

  // coords
  // test 3x4 grid
  const { toIndex, toCoord } = coordConverter(3)
  expect(toIndex(0,0)).toBe(0)
  expect(toIndex(0,1)).toBe(1)
  expect(toIndex(0,2)).toBe(2)
  expect(toIndex(1,0)).toBe(3)
  expect(toIndex(1,1)).toBe(4)
  expect(toIndex(1,2)).toBe(5)
  logTest('coords toIndex')
  
  const [r, c] = toCoord(10)
  expect(r).toBe(3)
  expect(c).toBe(1)
  logTest('coords toCoord')

  // canvas
  const c1 = canvas(3, 4)
  expect(c1.w).toBe(3)
  expect(c1.h).toBe(4)
  c1.pixels.forEach((p) => {
    expect(p).toEqual(color(0, 0, 0,))
  })
  c1.write(3, 1, [1, 0, 0])
  expect(c1.read(3, 1))
    .toEqual(color(1, 0, 0))
    .toEqual(c1.pixels[10])

  logTest('canvas')

}