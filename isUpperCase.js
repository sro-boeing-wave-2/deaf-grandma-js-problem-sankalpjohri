/**
 * @fileOverview Checks if the string is in uppercase
 */

/**
 * Checks if the string is in uppercase
 * @param {string} s The string to be checked
 * @returns {boolean}
 */
const isUppercase = (s) => {
  let i = 0;
  s = s.toString();
  let character = '';
  while (i < s.length) {
    character = s.charAt(i);
    if (character != ' ') {
      if (character === character.toLowerCase()) {
        return false;
      }
    }
    i += 1;
  }
  return true;
};

module.exports = isUppercase;
