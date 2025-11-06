// Find duplicate values in an array 

function findDuplicates(arr) {
  const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
  return [...new Set(duplicates)]; 
}


let numbers = [1, 2, 3, 2, 4, 5, 1, 6, 3];
console.log(findDuplicates(numbers));
