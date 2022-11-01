import rl from 'readline-sync';
import greetings from './greetings.js';

const ROUNDS_COUNT = 3;

export default (game) => {
  const userName = greetings();
  console.log(game.GAME_DESCRIPTION);
  let currentRound = 0;
  while (currentRound < ROUNDS_COUNT) {
    const QA = game.getQuestAndAnswer();
    console.log(`Question: ${QA.question}`);
    const playerAnswer = rl.question('Your answer: ');
    if (playerAnswer === QA.correctAnswer) {
      console.log('Correct!');
      currentRound += 1;
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${QA.correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return null;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return null;
};
