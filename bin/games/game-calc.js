export const GAME_DESCRIPTION = 'What is the result of the expression?';
const ARITHMETIC_OPERATIONS = ['+', '-', '*'];

const calc = (operator, firstOperand, secondOperand) => {
  switch (operator) {
    case ('+'):
      return firstOperand + secondOperand;
    case ('-'):
      return firstOperand - secondOperand;
    case ('*'):
      return firstOperand * secondOperand;
    default:
      return 'error - invalid operator';
  }
};

export const getQuestAndAnswer = () => {
  const operator = ARITHMETIC_OPERATIONS[Math.floor(Math.random() * ARITHMETIC_OPERATIONS.length)];
  const firstOperand = Math.round(Math.random() * 25);
  const secondOperand = Math.round(Math.random() * 25);
  return {
    question: `${firstOperand} ${operator} ${secondOperand}`,
    correctAnswer: String(calc(operator, firstOperand, secondOperand)),
  };
};
