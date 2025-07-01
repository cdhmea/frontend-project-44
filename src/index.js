import provideName from './games/cli.js'
import readlineSync from 'readline-sync'

export default function startGame(game, description) {
  console.log(`Welcome to the Brain Games!`)
  const name = provideName()
  console.log(description)
  for (let round = 0; round < 3; round++) {
    const [number, correctAnswer] = game()
    console.log(`Question: ${number}`)
    const userAnswer = readlineSync.question('Your answer: ')
    if (correctAnswer == userAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}
