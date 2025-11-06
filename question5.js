// returns string that has letters in alphabetical order

function sortLetters(str) {
  str = str.toLowerCase();
  return str.split('').sort().join('');
}
console.log(sortLetters("Typescript"));

 //using Bubble Sort logic
// function sortLetters(str) {
//   str = str.toLowerCase();
//   let arr = str.split('');

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // Swap letters
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }


//   return arr.join('');
// }

// console.log(sortLetters("React"));


// for numbers 
// function sortAscDesc(arr) {
//   let ascending = [...arr].sort((a, b) => a - b);
//   let descending = [...arr].sort((a, b) => b - a);
//   return { ascending, descending };
// }

// let numbers = [25, 100, 5, 50];
// let result = sortAscDesc(numbers);

// console.log("Ascending:", result.ascending);
// console.log("Descending:", result.descending);
