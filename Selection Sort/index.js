
function selectionSort (array) {
  for (i = 0; i < array.length; i++) {
    var isSwaped = false;
    for (j = i+1; j < array.length; j++) {
      if (array[i] > array[j]) {
        [array[i], array[j]] = [array[j], array[i]];
        isSwaped = true;
      }
    }
    if (!isSwaped) break;
  }
  return array;
}

function selectionSort2 (array) {
  for (i = 0; i < array.length; i++) {
    var smallest = array [i];
    var isSwaped = false;
    for (j = i+1; j < array.length; j++) {
      if (array[i] > array[j]) {
        smallest = array[j];
      }
      if (array[i] != smallest) {
        [array[i], array[j]] = [array[j], array[i]];
        isSwaped = true;
      }
    }
    if (!isSwaped) break;
  }
  return array;
}

console.log(selectionSort([2, 5, 1, 6, 10, 5, -1, 19, 5, 3, 2, 0, 50]));
console.log(selectionSort([1, 0, -3, 2, 3, 4, 5, 10]));
console.log(selectionSort2([2, 5, 1, 6, 10, 5, -1, 19, 5, 3, 2, 0, 50]));
console.log(selectionSort2([1, 0, -3, 2, 3, 4, 5, 10]));