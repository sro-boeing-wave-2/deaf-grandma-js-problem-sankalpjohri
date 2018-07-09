/**
 * @fileOverview Contains logic of Deaf Grandma
 */
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

/**
 * Put all the code here which would facilitate your conversation
 * with the Deaf Grandma.
 *
 * You can make use of the
 * 1. prompt function to get input from the user
 * 2. print function to print text on to the console
 */
print('What do you want to say to Grandma!!');
let byeCount = 0;
while (true) {
  const input = prompt();
  if (!isUppercase(input)) {
    print('HUH?! SPEAK UP, SONNY!');
  } else if (input === 'BYE') {
    byeCount += 1;
    if (byeCount >= 3) {
      break;
    }
    const response = 'NO, NOT SINCE '.concat(getRandomValue(1930, 1950));
    print(response);
  } else {
    const response = 'NO, NOT SINCE '.concat(getRandomValue(1930, 1950));
    print(response);
  }
}
