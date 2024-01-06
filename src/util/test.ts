import { equals } from "./float"
import { maybePrefix } from "./string"

type ObjectLike = {[key: string]: any}

// bootleg edition
const isObject = (x: any): x is ObjectLike => {
  if (typeof x !== 'object') {
    return false
  }
  return x !== null &&
    x instanceof Date === false
}

// TODO: this should have static tracker so that for a given test suite you can say which test failed
// probably you should have one assert instance per test suite or something
// when you make assertions you store all of them in a list
// then when you 'run' you go through them and you can say which test exactly failed in that suite
class Assert {
  static _equals(x: any, y: any): boolean {
    return typeof x === 'number' && typeof y === 'number'
    ? equals(x, y)
    : x === y
  }
  x: any
  prefix: string | undefined
  constructor(x: any, prefix?: string) {
    this.x = x
    this.prefix = prefix
  }

  toBe = (y: any) => {
    const same = Assert._equals(this.x, y)
    if (!same) {
      throw Error(maybePrefix(`${this.x} not be ${y}.`, this.prefix))
    }
    return this
  }

  // TODO(?): work with nested objects.  Right now assumes the array or object contains primitive values only
  toEqual = (y: {[key: string]: any}) => {
    if (!isObject(this.x)) {
      throw Error(maybePrefix(`${this.x} is not an object.`, this.prefix))
    }
    if (!isObject(y)) {
      throw Error(maybePrefix(`${y} is not an object.`, this.prefix))
    }
    const diff = Object.keys(this.x)
      .find(k => y.hasOwnProperty(k) && !Assert._equals(this.x[k], y[k]))

    if (diff !== undefined) {
      throw Error(maybePrefix(`equality error, on property ${diff}. ${this.x[diff]} not be ${y[diff]}.`))
    }
    return this
  }


}

export const getExpect = (prefix?: string) => {
  return function expect(x: any) {
    return new Assert(x, prefix)
  }
}