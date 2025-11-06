// reverse a number

function reverse(num) {
 let str = num.toString();
 let reversedStr = str.split('').reverse().join('');
 return Number(reversedStr);
}


let num = 123465;
console.log(reverse(num)); 
