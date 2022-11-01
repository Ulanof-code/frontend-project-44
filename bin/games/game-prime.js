import _ from 'lodash';

export const GAME_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (value) => {
  if (value < 2 || value % 2 === 0) {
    return false;
  }
  let divisor = 3;
  while (divisor <= value / 2) {
    if (value % divisor === 0) {
      return false;
    }
    divisor += 1;
  }
  return true;
};

export const getQuestAndAnswer = () => {
  const value = _.random(1, 3571);
  const correctAnswer = isPrime(value) ? 'yes' : 'no';
  return {
    question: String(value),
    correctAnswer,
  };
};
