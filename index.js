// Code your solutions in this file
// Function 1: writeCards
function writeCards(names, event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

// Function 2: countDown
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

// Exporting functions (for testing environment like Mocha or Jest)
module.exports = { writeCards, countDown };
