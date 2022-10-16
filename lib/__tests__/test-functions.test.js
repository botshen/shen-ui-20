/* eslint-disable no-undef */
// test/test-functions.test.js

const { calculateValue } = require('../test-functions')

describe('test-coverage test suite', () => {
  it('calculateValue test 1', () => {
    const result = calculateValue(10, 20)
    expect(result.value).toBe(30)
    expect(result.message).toBe(null)
  })
  it('calculateValue test 2', () => {
    const result = calculateValue(100, 20)
    expect(result.value).toBe(120)
    expect(result.message).toBe('Warning: result is greater then 100')
  })
  it('calculateValue test 3', () => {
    const result = calculateValue(100, 20, true)
    expect(result.value).toBe(130)
    expect(result.message).toBe('Warning: result is greater then 100')
  })
  it('calculateValue test 4', () => {
    const result = calculateValue(100, 20, true, false)
    expect(result.value).toBe(130)
    expect(result.message).toBe('result is greater then 100')
  })
})
