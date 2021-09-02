import readlineSync from 'readline-sync';

const numberQestions = () => {
    let i,
        num = [4, 5, 6];
    
    for (i=0; i<num.length; i++) {
        let answer = readlineSync.question(`Question ${num[i]}:`);
        let rightAnswer;
        if (answer === 'yes' &&  num[i]%2 === 0) {
            console.log('correct');
        } else if (answer === 'no' && num[i]%2 !== 0) {
            console.log('correct');
        } else {
            if (num[i]%2 === 0) {
                rightAnswer = 'yes';
            } else if (num[i]%2 !== 0) {
                rightAnswer = 'no';
            }
            console.log(`'${answer}' is wrong answer. Corrrect answer was '${rightAnswer}'`);
            return console.log(`You made mistakes. Game over, `)
        }
    }
    return console.log(`Congratulations, `)
}

export default numberQestions;