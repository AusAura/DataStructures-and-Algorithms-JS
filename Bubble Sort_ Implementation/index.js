
function bubbleSort (array) {
  for (i = array.length - 1; i > 0; i--) {
    for (j = 0; j < i; j++) {
      if (array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
      // console.log(j, array, array[j], array[j+1]);
    }
  }
  return array;
}

console.log(bubbleSort([2, 5, 1, 6, 10, 5]));