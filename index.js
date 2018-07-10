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

// Print the initial prompt.
print('What do you want to say to Grandma!!');
let byeCount = 0;
// Run a loop to continue the conversation.
while (true) {
  const input = prompt();
  // Check if the input string is in uppercase.
  if (!isUppercase(input)) {
    // Input string is not in upper case.
    byeCount = 0;
    print('HUH?! SPEAK UP, SONNY!');
  } else if (input === 'BYE') {
    // Input string is 'BYE'.
    byeCount += 1;
    if (byeCount >= 3) {
      // Exiting the code as the user has entered 'BYE' 3 times.
      break;
    }
    const response = 'NO, NOT SINCE '.concat(getRandomValue(1930, 1950));
    print(response);
  } else {
    byeCount = 0;
    // Returning the standard response.
    const response = 'NO, NOT SINCE '.concat(getRandomValue(1930, 1950));
    print(response);
  }
}
