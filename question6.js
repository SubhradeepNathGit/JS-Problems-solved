// count number of vowels
function countVowels(string) {
    string = string.toLowerCase();
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Subhradeep Nath"));  

