import readlineSync from 'readline-sync';
import { name } from './cli.js';
import { getRandomInt } from "./common.js";

export const expressionQuestion = () => {
    let i;
    
    for (i=0; i < 1; i += 1) {
        let n;
        let arrOperator = ['+', '-', '*'];
        for (n=0; n < arrOperator.length; n += 1) {
            let one = getRandomInt();
            let two = getRandomInt();
            const answer = readlineSync.question(`Question ${one} ${arrOperator[n]} ${two}:`);
            let rightAnswer;
            function computation() {
                if (arrOperator[n] === '+') {
                    rightAnswer = one + two;
                    return one + two;
                }
                if (arrOperator[n] === '-') {
                    rightAnswer = one - two;
                    return one - two;
                }
                if (arrOperator[n] === '*') {
                    rightAnswer = one * two;
                    return one * two;
                }
            }
            if (arrOperator[n] && answer == computation()) {
                console.log('Correct!')
                
            } else {
                console.log(`${answer}' is wrong answer. Corrrect answer was '${rightAnswer}'!`);
                return console.log(`Let's try again, ${name}!`);
            }
            
        }
        return console.log(`Congratulations, ${name}!`)
    }
}