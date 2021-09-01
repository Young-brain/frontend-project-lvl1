import readlineSync from 'readline-sync';

const greeting = () => {
    const name = readlineSync.question("what's your name? ");
    const greetingName = console.log(`Hello, ${name}`);
};

export default greeting;