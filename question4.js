//palindrom check

function checkPalindrome(string) {
  
    string = string.toLowerCase();
    let reversedString = string.split('').reverse().join('');

    return string === reversedString;
}

console.log(checkPalindrome("oromon"));         

