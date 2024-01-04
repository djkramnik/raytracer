import { equals } from "./float"

const conditionallyPrefix = (s: string, prefix?: string) => 
  prefix === undefined
    ? s
    : `${prefix}: ${s}`

// TODO: this should have static tracker so that for a given test suite you can say which test failed
// probably you should have one assert instance per test suite or something
// when you make assertions you store all of them in a list
// then when you 'run' you go through them and you can say which test exactly failed in that suite
class Assert {
  x: any
  prefix: string | undefined
  constructor(x: any, prefix?: string) {
    this.x = x
    this.prefix = prefix
  }
  toBe = (y: any) => {
    const same = typeof this.x === 'number' && typeof y === 'number'
      ? equals(this.x, y)
      : this.x === y

    if (!same) {
      throw Error(conditionallyPrefix(`${this.x} not be ${y}`, this.prefix))
    }
    return this
  }
}

export const getExpect = (prefix?: string) => {
  return function expect(x: any) {
    return new Assert(x, prefix)
  }
}