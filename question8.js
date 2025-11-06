// find second lowest and second greatest number in an array

function findSecondLowestAndGreatest(arr) {
    arr.sort((a, b) => a - b);
    let secondLowest = arr[1];
    let secondGreatest = arr[arr.length - 2];
    return [secondLowest, secondGreatest];
}

let numbers = [11, 223, 45, 3, 7];
console.log(findSecondLowestAndGreatest(numbers)); 
