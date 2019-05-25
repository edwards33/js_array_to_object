//see CONSOLE!
var votes = [
  "c",
  "c",
  "js",
  "js",
  "js",
  "c",
  "rust",
  "js",
  "java"
];

var initialValue = {};

var reducer = function(tally, vote) {
  if (!tally[vote]) {
    tally[vote] = 1;
  } else {
    tally[vote] = tally[vote] + 1;
  }

  return tally;
};

var result = votes.reduce(reducer, initialValue);

// Output
console.log("JS: ", result.js)
console.log("Rust: ", result.rust)
console.log("Java: ", result.java)
console.log("C: ", result.c)
