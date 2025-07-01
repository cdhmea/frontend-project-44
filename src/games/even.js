export const description = `Answer "yes" if the number is even, otherwise answer "no".`

export function checkEven() {
  const randomNum = Math.floor(Math.random() * 100)
  const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no'
  return [randomNum, correctAnswer]
}
