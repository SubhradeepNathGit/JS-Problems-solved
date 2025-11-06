//Remove duplicate items from an array
function removeDuplicates(arr) {
  return arr.filter((item, index, self) =>
    index === self.findIndex(t => t.toLowerCase() === item.toLowerCase())
  );
}


console.log(removeDuplicates(["Apple", "Banana", "apple", "Orange", "BANANA", "Grapes"]));
