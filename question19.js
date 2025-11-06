// Function to sort an array numerically
function sort(arr) {
    let sortedArr = arr.slice(); 
    sortedArr.sort((a, b) => a - b);
    return sortedArr;
}


let arr1 = [-11, 2, 5, 7, 5, -3, 3, 5, 10];
let result = sort(arr1);

console.log(result); 
