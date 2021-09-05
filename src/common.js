export function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

export function echoCorrect() {
  return console.log('correct!');
}
export function wrongAnswer(answer, rightAnswer) {
  return console.log(`'${answer}' is wrong answer. Corrrect answer was '${rightAnswer}'!`);
}
export function gameOver(name) {
  return console.log(`Let's try again, ${name}!`);
}
export function success(name) {
  return console.log(`Congratulations, ${name}!`);
}
