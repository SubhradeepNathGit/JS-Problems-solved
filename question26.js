// Sum of each individual index in two arrays 
function sumArrays(arr1, arr2) {
  const result = [];
  let maxLength;


  if (arr1.length > arr2.length) maxLength = arr1.length;
  else maxLength = arr2.length;

  for (let i = 0; i < maxLength; i++) {
    let val1, val2;

    if (i < arr1.length) val1 = arr1[i];
    else val1 = 0;

    if (i < arr2.length) val2 = arr2[i];
    else val2 = 0;

    result.push(val1 + val2);
  }

  return result;
}


let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];

console.log(sumArrays(array1, array2));
