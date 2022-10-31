#!/usr/bin/env node

import readline from 'readline-sync';

const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readline.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  let randomNumber;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  while (counter < 3) {
    randomNumber = Math.floor(Math.random() * 100);
    const parity = randomNumber % 2 === 0 ? 'even' : 'odd';
    console.log(`Question: ${randomNumber}`);
    const answer = readline.question('Your answer: ');
    if (parity === 'even') {
      if (answer === 'yes') {
        console.log('Correct!');
        counter += 1;
        if (counter === 3) {
          console.log(`Congratulations, ${userName}!`);
        }
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
        console.log(`Let's try again, ${userName}!`);
        break;
      }
    } else if (parity === 'odd') {
      if (answer === 'no') {
        console.log('Correct!');
        counter += 1;
        if (counter === 3) {
          console.log(`Congratulations, ${userName}!`);
        }
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${userName}!`);
        break;
      }
    }
  }
};

gameEven();
