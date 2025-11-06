
function flattenArray(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
}

// Call the function
let array = ['a', 'b', [1, 1, 9, [8, 9], 8, 8]];
let flatArray = flattenArray(array);
console.log(flatArray);
