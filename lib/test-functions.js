// test-functions.js

module.exports.calculateValue = (valueA, valueB, addOffset = false, addWarning = true) => {
  const result = {
    value: (addOffset ? valueA + valueB + 10 : valueA + valueB),
    message: null,
  }
  if (result.value > 100) {
    const messageParts = []
    if (addWarning)
      messageParts.push('Warning:')
    messageParts.push('result is greater then 100')
    result.message = messageParts.join(' ')
  }
  return result
}
