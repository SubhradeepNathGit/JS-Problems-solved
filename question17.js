// 17. Find all 3-digit Armstrong numbers

function findArmstrongNumbers() {
  const armstrong = [];
  for (let num = 100; num <= 999; num++) {

    const digits = String(num).split('').map(Number);
    const sum = digits.reduce((acc, d) => acc + d**3, 0);

    if (sum === num) armstrong.push(num);
  }
  return armstrong;
}

console.log(findArmstrongNumbers());


// Alternative Implementation
// function findArmstrongNumbers() {
//   const armstrongNumbers = [];

//   for (let number = 100; number <= 999; number++) {

//     let sumOfCubes = 0;
//     let temp = number;

//     while (temp > 0) {
//       const digit = temp % 10;      
//       sumOfCubes += digit ** 3;      
//       temp = Math.floor(temp / 10);  
//     }

//     if (sumOfCubes === number) {
//       armstrongNumbers.push(number); 
//     }
//   }

//   return armstrongNumbers;
// }

// // Function call
// console.log(findArmstrongNumbers());
