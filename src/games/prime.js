export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

export function isPrime() {
  const randomNum = Math.floor(Math.random() * 100)
  let allDivisors = 0
  for (let divisor = randomNum; divisor > 0; divisor--) {
    if (randomNum % divisor === 0) {
      allDivisors++
    }
  }
  const correctAnswer = allDivisors === 2 ? 'yes' : 'no'
  return [randomNum, correctAnswer]
}
