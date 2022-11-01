import _ from 'lodash';

export const GAME_DESCRIPTION = 'What number is missing in the progression?';

const buildProgression = (startValue, finalValue, step) => _.range(startValue, finalValue, step);

export const getQuestAndAnswer = () => {
  const step = _.random(2, 5);
  const finalValue = _.random(step * 10, 50);
  const startValue = _.random(0, (finalValue - (step * 10)));
  const secretNumber = _.random(0, _.range(startValue, finalValue, step).length);
  const progression = buildProgression(startValue, finalValue, step);
  const correctAnswer = String(progression[secretNumber]);
  progression[secretNumber] = '..';
  const question = _.join(_.map(progression, String), ' ');
  return {
    question,
    correctAnswer,
  };
};
