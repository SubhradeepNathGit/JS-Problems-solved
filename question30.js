//Merge two arrays, remove duplicates, and sort ascending
function mergeUniqueSorted(arr1, arr2) {

  const merged = [...arr1, ...arr2];
  return [...new Set(merged)].sort((a, b) => a - b);
}


let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];

console.log(mergeUniqueSorted(array1, array2));
