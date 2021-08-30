import readlineSync from 'readline-sync';

const name = readlineSync.question("what's your name? ");
const greatingName = console.log(`Hello, ${name}`);

export {name, greatingName};