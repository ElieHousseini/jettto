/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word.
 * @param {string} secretWord - Secret word.
 * @returns {number} - Number of letters matched between guessed word and the secret word
 */

export function getLetterMatchCount(guessWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split('')) // p a r t y
  const guessedLetterSet = new Set(guessWord.split('')) // t r a i n

  // returns the length of the array that contains the common letters
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length
}