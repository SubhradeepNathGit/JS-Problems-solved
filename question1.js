// reverse of a string

function reverseStr(string) {
  return string.split('').reverse().join('');
}


const input = "Subhradeep";
const output = reverseStr(input);
console.log(output); 
