
function getDigit (num, place) {
  return Math.floor(Math.abs(num)/ (Math.pow(10, place)) % 10)
}

function howLong(num) {
  if (num === 1) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigit (numArray) {
  let counter = 0;
  for (i = 0; i < numArray.length; i++) {
    counter = Math.max(counter, howLong(numArray[i]));
  }
  return counter;
}

function radixSort(numArray) {
  let maxNumberLength = maxDigit(numArray);

  for (i = 0; i < maxNumberLength; i++) {
    let temp = {};
    for (j = 0; j < numArray.length; j++) {
      currentDigit = getDigit(numArray[j], i);
      if (!temp[currentDigit]) temp[currentDigit] = [];
      temp[currentDigit] = temp[currentDigit].concat(Math.abs(numArray[j]));
    }
    numArray = Object.values(temp).flat( );
  }
  return numArray;
}

// console.log(radixSort([432, 5555, 12]));

console.log(radixSort([2, 5, 3, 4, 5, 10, 6, 10, -1, 5, 7, 1, 0, -3, 2]));

