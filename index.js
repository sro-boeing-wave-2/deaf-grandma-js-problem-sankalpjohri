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

const conversationStarter = 'What do you want to say to Grandma!!';
const yellBack = () => `NO, NOT SINCE ${getRandomValue(1930, 1950)}`;
const speakUpText = 'HUH?! SPEAK UP, SONNY!';

let byeCount = 0;

print(conversationStarter);

// Run a loop to continue the conversation.
while (byeCount < 2) {
  const input = prompt().toString();
  // Check if the input string is in uppercase.
  if (input === 'BYE') {
    // Input string is 'BYE'.
    byeCount += 1;
  }
  if (!isUppercase(input)) {
    // Input string is not in upper case.
    print(speakUpText);
  } else {
    // Returning the standard response.
    print(yellBack());
  }
}
