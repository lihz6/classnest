import { classnest } from '..'

describe('Test to be empty', () => {
  it('null to be empty', () => {
    expect(classnest(null)).toBe('')
  })
  it('undefined to be empty', () => {
    expect(classnest(undefined)).toBe('')
  })
  it('false to be empty', () => {
    expect(classnest(false)).toBe('')
  })
  it('true to be empty', () => {
    expect(classnest(true)).toBe('')
  })
  it('[] to be empty', () => {
    expect(classnest([])).toBe('')
  })
  it('{} to be empty', () => {
    expect(classnest({})).toBe('')
  })
})

describe('Test classnest from numbers', () => {
  ;[-1, 0, 1].forEach(n => {
    it(`${n} to be '${n}'`, () => {
      expect(classnest(n)).toBe(String(n))
    })
  })
})

describe('Test classnest from strings', () => {
  ;['bar', 'baz'].forEach(s => {
    it(`${s} to be '${s}'`, () => {
      expect(classnest(s)).toBe(s)
    })
  })
})

describe('Test classnest from array', () => {
  const array = [0, 'foo', true, false, null, undefined]
  const result = '0 foo'
  it(`[0, 'foo', true, false, null, undefined] to be '${result}'`, () => {
    expect(classnest(array)).toBe(result)
  })
})

describe('Test classnest from object', () => {
  const object = { foo: { bar: true } }
  const result = 'foo foo-bar'
  it(`{ foo: { bar: true } } to be '${result}'`, () => {
    expect(classnest(object)).toBe(result)
  })
})
