#!/usr/bin/env node

export const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getQuestAndAnswer = () => {
  const randomNumber = Math.round(Math.random() * 100);
  return {
    question: String(randomNumber),
    correctAnswer: randomNumber % 2 === 0 ? 'yes' : 'no',
  };
};
