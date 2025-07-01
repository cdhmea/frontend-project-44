export const description = 'What is the result of the expression?'

export function calculated() {
  const [number1, number2] = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
  const operations = ['+', '-', '*']
  const randomOperation = operations[Math.floor(Math.random() * operations.length)]
  let correctAnswer = ''
  switch (randomOperation) {
    case '+':
      correctAnswer = number1 + number2
      break
    case '-':
      correctAnswer = number1 - number2
      break
    case '*':
      correctAnswer = number1 * number2
      break
  };
  const expression = `${number1} ${randomOperation} ${number2}`
  return [expression, correctAnswer]
}
