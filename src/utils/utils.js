/**
 * Genrates a random list of integers
 * @param {Number} n The number of random integers to be generated
 * @returns a list of n random integers
 */
export function generateRandomIntegers (n) {
  const integers = []
  let integer
  while (integers.length < n) {
    integer = Math.floor(Math.random() * ((n - 1) - 0 + 1)) + 0
    if (!integers.includes(integer)) {
      integers.push(integer)
    }
  }
  return integers
}

export function changeColor (bestScoreDisplay, color) {
  bestScoreDisplay.style.color = color
  setTimeout(() => {
    bestScoreDisplay.style.color = 'antiquewhite'
  }, 500)
}
