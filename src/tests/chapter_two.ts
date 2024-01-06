import { addColor, color, hadamardColor, multiplyColor, subtractColor } from "../color"
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

  
}