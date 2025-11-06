// Find longest word in a string
function longestWord(str) {
  const words = str.split(' ');
  const longest = words.reduce((longest, current) => current.length > longest.length ? current : longest);
  const shortest = words.reduce((shortest, current) => current.length < shortest.length ? current : shortest);
  console.log(`longest word: ${longest} (includes ${longest.length} letters)`);
  console.log(`shortest word: ${shortest} (includes ${shortest.length} letters)`);
}

const input = "I am a React JS Developer";
longestWord(input);  
