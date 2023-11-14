
function pivotHelper (array, startIndex = 0, endIndex = array.length - 1) {
  let pivotPoint = startIndex;
  for (i = startIndex; i < endIndex; i++) {
    if (array[startIndex] > array[i+1]) {
      pivotPoint++;
      [array[pivotPoint], array[i+1]] = [array[i+1], array[pivotPoint]];
    }
  }
  [array[startIndex],array[pivotPoint]] = [array[pivotPoint], array[startIndex]];
  return pivotPoint;
}

// function quickSort (array) {
//   if (array.length <= 1) return array;
//   let pivotPoint = pivotHelper(array);
//   if (pivotPoint === 0) pivotPoint++;
//   quickSort(array.slice(0, pivotPoint));
//   quickSort(array.slice(pivotPoint));
//   return array;
// }

// MY ATTEMPT

function quickSort (array, left = 0, right = array.length) {
  if (left < right) {
  let pivotPoint = pivotHelper(array, left, right);
  quickSort(array, left, pivotPoint-1);
  quickSort(array, pivotPoint+1, right);
  }
  return array;
}

// console.log(quickSort([2, 5, 1, 0, -3]));

// console.log(quickSort([2, 5, 3, 4, 5, 10, 6, 10]));

console.log(quickSort([2, 5, 3, 4, 5, 10, 6, 10, -1, 5, 7, 1, 0, -3, 2]));