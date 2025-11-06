//Swap case of each character

//using map
function swapCase(str) {
  return str.split('').map(ch => ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()).join('');
}
console.log(swapCase("sUBHRADEEP nATH")); 


//if-else
function swapCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch === ch.toUpperCase()) {
      result += ch.toLowerCase();
    } else {
      result += ch.toUpperCase();
    }
  }
  return result;
}

console.log(swapCase("Subhradeep Nath")); 
