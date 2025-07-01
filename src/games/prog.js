export const description = 'What number is missing in the progression?'

export function generateProgression() {
  const firstNumber = Math.floor(Math.random() * 30)
  let nextNumber = firstNumber
  const step = Math.floor(Math.random() * 9) + 1
  const randomPosition = Math.floor(Math.random() * 10)
  const progressionArray = []
  let correctAnswer
  for (let count = 0; count < 10; count++) {
    if (count === randomPosition) {
      progressionArray.push('..')
      nextNumber += step
      correctAnswer = nextNumber
    }
    else {
      nextNumber += step
      progressionArray.push(nextNumber)
    }
  }
  const progressionString = progressionArray.join(' ')
  return [progressionString, correctAnswer]
}
