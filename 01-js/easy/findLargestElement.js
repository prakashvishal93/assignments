/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

let numbers = [3, 7, 2, 9, 1];
function findLargestElement(numbers) {
  let largest = numbers[0];
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > largest) {
      largest = numbers[index];
    }
  }
  return largest;
}
const largestNumber = findLargestElement(numbers);
console.log(largestNumber);

module.exports = findLargestElement;
