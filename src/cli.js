import readlineSync from 'readline-sync';

const greeting = () => {
  const name = readlineSync.question("what's your name? ");
  const greetingName = `Hello, ${name}`;
  console.log(greetingName);
};

export default greeting;
