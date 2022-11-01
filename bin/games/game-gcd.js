export const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const gcd = (firstOperand, secondOperand) => {
  if (secondOperand > firstOperand) return gcd(secondOperand, firstOperand);
  if (!secondOperand) return firstOperand;
  return gcd(secondOperand, firstOperand % secondOperand);
};

export const getQuestAndAnswer = () => {
  const firstOperand = Math.round(Math.random() * 100);
  const secondOperand = Math.round(Math.random() * 100);
  return {
    question: `${firstOperand} ${secondOperand}`,
    correctAnswer: String(gcd(firstOperand, secondOperand)),
  };
};
