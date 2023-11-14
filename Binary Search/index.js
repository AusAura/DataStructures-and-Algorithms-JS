// function binarySearch(array, val){

//     if (array.length === 1 && array[0] !== val) return -1;

//     if (array[0] === val) return 0;
//     if (array[array.length-1] === val) return array.length-1;

//     if (array[Math.floor((array.length)/2) - 1] === val) return Math.floor((array.length)/2);
//     else if (array[Math.floor((array.length)/2) - 1] > val) return binarySearch(array.slice(0, Math.ceil((array.length)/2)), val);
//     else return binarySearch(array.slice(Math.floor((array.length)/2 - 1), array.length - 1), val);
// }


// function binarySearch(array, val, start=0, end=array.length-1){

//   if (array.length === 1 && array[0] !== val) return -1;
//   if (end > array.length) end -= 2;
//   let pivot = Math.ceil((array.length)/2);

//   if (array[start] === val) return start;
//   if (array[end] === val) return end;

//   if (array[pivot - 1] === val) return Math.floor((end + start)/2);
//   else if (array[pivot - 1] > val) return binarySearch(array.slice(0, pivot), val, start, end - pivot + 1);
//   else return binarySearch(array.slice(pivot), val, start + pivot, end);
// }

function binarySearch(array, val){

  let pivot = Math.ceil((array.length - 1)/2);
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    if (array[start] === val) return start;
    if (array[end] === val) return end;
    if (end-start === 2) return -1;
    
    if (array[pivot + start] === val) return pivot + start;
    else if (array[pivot + start] > val) end = end - pivot - 1;
    else start += pivot + 1;

    pivot = Math.ceil((end-start)/2);
  }
  // return -1;
}

console.log(binarySearch([1,2,3,4,5],2));
 // 1
console.log(binarySearch([1,2,3,4,5],3));
 // 2
console.log(binarySearch([1,2,3,4,5],5));
 // 4
console.log(binarySearch([1,2,3,4,5],6));
 // -1
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10));
//  // 2
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95));
 // 16
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100));
 // -1