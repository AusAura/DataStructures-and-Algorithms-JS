
// one loop is for going through the array + current element index
// second loop -> 

// function insertionSort (array) {
//   const swap = innerArray => {
//       console.log(innerArray, '+++0 value ', innerArray[0]);
//       if (innerArray.length === 1) return;
//       let sortedArray = [];
//       let temp = innerArray[0];
//       innerArray[0] = innerArray[1];
//       innerArray[1] = temp;
//       swap(innerArray.slice(1))
//       console.log(innerArray, 'after swap');
//       return innerArray;
//     }
//     let newPosition = 0;
//     let newArray = [];
//     for (i = 1; i < array.length; i++) {
//       newPosition = i;
//       for (j = i-1; j >= 0; j--) {
//         if (array[i] < array[j]) {
//           newPosition = j;
//         }
//       }
//       console.log(i, 'new position = ', newPosition, 'One pass is done!')
//       // console.log(array, 'before') 
//       if (newPosition !== i) console.log(newArray = newArray.concat(swap(array.slice(0, i+1)), array.slice(i+1)));
//       // console.log(array, 'after')
//     }
//   return array;
// }

// function insertionSort (array) {
//   for (i = 1; i < array.length; i++) {
//     console.log('new pass! ', array);
//     console.log(array[i-1], array[i], 'compare');
//     if (array[i-1] > array[i]) {
//       [array[i-1], array[i]] = [array[i], array[i-1]];
//       console.log(array[i-1], array[i], 'after swap');
//       for (j = i-1; j > 0; j--) {
//         console.log('inner swap pass!');
//         console.log(array[j-1], array[j], 'compare');
//         if (array[j] < array[j-1])
//         [array[j], array[j-1]] = [array[j-1], array[j]];
//         console.log(array[j-1], array[j], 'after swap');
//       }
//     }

//   }
// return array;
// }


// function insertionSort2 (array) {
//   for (i = 1; i < array.length; i++) {
//     let currentVal = array[i];
//     let newPosition = i;
//     if (array[i-1] > array[i]) {
//       newPosition = i-1;
//       for (j = i; j > 0 ; j--) {
//         if (i === 1) break;
//         if (currentVal < array[j]) {
//         newPosition = j;  
//         [array[j], array[j+1]] = [array[j+1], array[j]];
//         }
//         if (array[j] < currentVal) break;
//       }
//     if (i === 1 && newPosition !== i) [array[i], array[i-1]] = [array[i-1], array[i]];
//     else if (newPosition !== i) array[newPosition] = currentVal;
//     }
//   }
// return array;
// }

// TRIED TO REMAKE AND HAD FAILED

function insertionSort (array) {
    for (i = 1; i < array.length; i++) {
      if (array[i-1] > array[i]) {
        [array[i-1], array[i]] = [array[i], array[i-1]];
        for (j = i-1; j > 0; j--) {
          if (array[j] < array[j-1])
          [array[j], array[j-1]] = [array[j-1], array[j]];
        }
      }

    }
  return array;
}

/// THIS IS MY WORKING, BUT IT IS NOT EXACTLY INSERTION.


function insertionSort2(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

// SOLUTION OF TRUE INSERTION

console.log(insertionSort2([2, 5, 1, 6, 10, 5, -1, 19, 5, 3, 2, 0, 50]));
// console.log(insertionSort2([1, 0, -3, 2, 3, 4, 5, 10]));
