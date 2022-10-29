import readline from "readline-sync";

export const greetings = () => {
    const greeting = 'Welcome to the Brain Games!';
    console.log(greeting);
    const userName = readline.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
};