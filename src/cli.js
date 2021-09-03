import readlineSync from 'readline-sync';

const name = readlineSync.question("what's your name? ");
const greetingName = `Hello, ${name}`;

export { name, greetingName };
