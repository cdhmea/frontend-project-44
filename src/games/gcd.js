export const description = 'Find the greatest common divisor of given numbers.'

export function greatestCommonDivisor() {
  const [number1, number2] = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
  const maxNumber = Math.max(number1, number2)
  let correctAnswer
  for (let divisor = maxNumber; divisor > 0; divisor--) {
    if (number1 % divisor === 0 && number2 % divisor === 0) {
      correctAnswer = divisor
      break
    }
  }
  let expression = `${number1} ${number2}`
  return [expression, correctAnswer]
}
