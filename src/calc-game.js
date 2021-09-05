import readlineSync from 'readline-sync';
import { name } from './cli.js';
import {
  getRandomInt, echoCorrect, wrongAnswer, gameOver, success,
} from './common.js';

const expressionQuestion = () => {
  let i;

  for (i = 0; i < 1; i += 1) {
    let n;
    const arrOperator = ['+', '-', '*'];
    for (n = 0; n < arrOperator.length; n += 1) {
      const one = getRandomInt();
      const two = getRandomInt();
      const answer = readlineSync.question(`Question ${one} ${arrOperator[n]} ${two}:`);
      let rightAnswer;
      function computation() {
        if (arrOperator[n] === '+') {
          rightAnswer = one + two;
          return rightAnswer;
        }
        if (arrOperator[n] === '-') {
          rightAnswer = one - two;
          return rightAnswer;
        }
        if (arrOperator[n] === '*') {
          rightAnswer = one * two;
          return rightAnswer;
        }
        return null;
      }
      if (arrOperator[n] && answer == computation()) {
        echoCorrect();
      } else {
        wrongAnswer(answer, rightAnswer);
        return gameOver(name);
      }
    }
  }
  return success(name);
};

export default expressionQuestion;
