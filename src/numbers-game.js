import readlineSync from 'readline-sync';
import { name } from './cli.js';

const numberQestions = () => {
  let i;
  const num = [4, 5, 6];

  for (i = 0; i < num.length; i += 1) {
    const answer = readlineSync.question(`Question ${num[i]}:`);
    let rightAnswer;
    if (answer === 'yes' && num[i] % 2 === 0) {
      console.log('correct');
    } else if (answer === 'no' && num[i] % 2 !== 0) {
      console.log('correct');
    } else {
      if (num[i] % 2 === 0) {
        rightAnswer = 'yes';
      } else if (num[i] % 2 !== 0) {
        rightAnswer = 'no';
      }
      console.log(`'${answer}' is wrong answer. Corrrect answer was '${rightAnswer}' !`);
      return console.log(`You made mistakes. Game over, ${name} !`);
    }
  }
  return console.log(`Congratulations, ${name} !`);
};
export default numberQestions;
