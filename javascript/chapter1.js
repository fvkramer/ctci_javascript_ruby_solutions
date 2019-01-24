//                                Problem 1
// Determine if string has all unique characters
// unique letters in string;

const isUnique = (str) => {
  const seen = {};

  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]]) {
      return false;
    }
    seen[str[i]] = true;
  }

  return true;
};

// console.log(isUnique('potaly'));


//                          Problem 2
// given two strings, write a method to decide if one is a permutation of the other
const checkPerm = (strOne, strTwo) => {
  const sortedOne = strOne.split('').sort().join();
  const sortedTwo = strTwo.split('').sort().join();

  return sortedOne === sortedTwo;
};

// console.log(checkPerm('adbhc', 'cabdh'));

// Problem 3
// replace all spaces in a string with '%20'
const URLify = (str, length) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      // debugger;
      str[i] = '%20';
    }
  }

  return str;
};

console.log(URLify('Mr John Smith'));

const palindromCheck = (string) => {

};


const oneAway = (string1, string2) => {};

// rotate by 90 degrees
const rotateMatrix = (matrix) => {};

// if an element in an MxN matrix is 0, its entire row and column are set to 0
const zeroMatrix = (matrix) => {};

const stringRotation = (s1, s2) => {

};
