import readlineSync from 'readline-sync';
import { name } from './cli.js';
import {
  getRandomInt, echoCorrect, wrongAnswer, gameOver, success,
} from './common.js';

const numberQestions = () => {
  let i;
  const num = [
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
  ];

  for (i = 0; i < num.length; i += 1) {
    const answer = readlineSync.question(`Question ${num[i]}:`);
    let rightAnswer;
    if (answer === 'yes' && num[i] % 2 === 0) {
      echoCorrect();
    } else if (answer === 'no' && num[i] % 2 !== 0) {
      echoCorrect();
    } else {
      if (num[i] % 2 === 0) {
        rightAnswer = 'yes';
      } else if (num[i] % 2 !== 0) {
        rightAnswer = 'no';
      }
      wrongAnswer(answer, rightAnswer);
      return gameOver(name);
    }
  }
  return success(name);
};
export default numberQestions;
