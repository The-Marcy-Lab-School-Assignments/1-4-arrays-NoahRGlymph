const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront) {
    arr.unshift(value); // Add value to the front of the array
  } else {
    arr.push(value); // Add value to the back of the array
  }
};

// Example usage:
let arr = [1, 2, 3];
addToFrontOrBack(arr, 0, true); // Adds 0 to the front of the array
console.log(arr); // Output: [0, 1, 2, 3]

addToFrontOrBack(arr, 4, false); // Adds 4 to the back of the array
console.log(arr); // Output: [0, 1, 2, 3, 4]

const reverseString = (str) => {
  return str.split('').reverse().join('');
};

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"

const newArrayFullOf = (value, numOfValue) => {
  return Array(numOfValue).fill(value);
};

// Example usage:
const newArrayFullOf1 = (value, length) => {
  return Array(length).fill(value);
};

const arr1 = newArrayFullOf1(1, 5);
console.log(arr); // Output: [1, 1, 1, 1, 1]

const arr2 = newArrayFullOf1(true, 2);
console.log(arr2); // Output: [true, true]

const insertIntoMiddle = (arr, value) => {
  const middleIndex = Math.floor(arr.length / 2); // Find the middle index
  arr.splice(middleIndex, 0, value); // Insert the value at the middle index
};

insertIntoMiddle(arr, 3);
console.log(arr); // Output: [1, 1, 3, 1, 1]

// Example usage:
let arr = [1, 2, 4, 5];
insertIntoMiddle(arr, 3);
console.log(arr); // Output: [1, 2, 3, 4, 5]

const deleteFromMiddle = (arr) => {
  const middleIndex = Math.floor(arr.length / 2); // Find the middle index
  arr.splice(middleIndex, 1); // Delete the value at the middle index
};

// Example usage:
let arr = [1, 2, 3, 4, 5];
deleteFromMiddle(arr);
console.log(arr); // Output: [1, 2, 4, 5]

const isRightIndex = (arr, value, index) => {
  if (index < 0 || index >= arr.length) {
    return false; // Index out of bounds
  }

  return arr[index] === value;
};

// Example usage:
const arr = [1, 2, 3, 4, 5];
console.log(isRightIndex(arr, 3, 2)); // Output: true (3 is at index 2)
console.log(isRightIndex(arr, 6, 4)); // Output: false (6 is not in the array)

const roundAllNumsDown = (arr) => {
  // Create a new array to store rounded down numbers
  const roundedDownArray = [];

  // Loop through each number in the array and round it down
  for (let num of arr) {
    roundedDownArray.push(Math.floor(num));
  }

  // Return the new array with rounded down numbers
  return roundedDownArray;
};

// Example usage:
const arr = [1.5, 2.8, 3.3, 4.9];
console.log(roundAllNumsDown(arr)); // Output: [1, 2, 3, 4]
console.log(arr); // Original array remains unchanged: [1.5, 2.8, 3.3, 4.9]

const getAllYCoordinates = (arrOfCoords) => {
  // Use map function to extract the y-coordinate from each coordinate pair
  return arrOfCoords.map(coord => coord[1]);
};

// Example usage:
console.log(getAllYCoordinates([[1, 2], [3, 4], [5, 6]])); // Output: [2, 4, 6]
console.log(getAllYCoordinates([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // Output: [2, 5, 8]

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
