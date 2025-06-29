import readlineSync from 'readline-sync'

export default function checkEven(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  for (let i = 0; i < 3; i++) {
    const randomNum = Math.floor(Math.random() * 100)
    console.log(`Question: ${randomNum}`)
    const userAnswer = readlineSync.question('Your answer: ')
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no'
    if (correctAnswer === userAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}`)
}
