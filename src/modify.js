const uppercaseAll = (...words) => {
  return words.map(word => word.toUpperCase());
};

// Example usage:
console.log(uppercaseAll('hello', 'world')); // Output: ['HELLO', 'WORLD']
console.log(uppercaseAll('one', 'two', 'three', 'four', 'five')); // Output: ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE']
console.log(uppercaseAll()); // Output: []

const destructureCoordinates = (coordinates) => {
  const x = coordinates[0];
  const y = coordinates[1];
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
