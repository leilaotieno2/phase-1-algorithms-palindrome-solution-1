function isPalindrome(word) {
  // Write your algorithm here
  
  // Pseudocode:
  // Reverse the word
  // Check if the reversed word is equal to the original word
  
  // Explanation:
  // We can reverse the word by splitting it into an array of characters, 
  // then calling the reverse() method on that array to reverse the order of the characters, 
  // and finally joining the characters back together into a string.
  
  const reversedWord = word.split("").reverse().join("");
  return reversedWord === word;
}

/* 
  Add written explanation of your solution here
  The isPalindrome function takes a word as input and returns true if the word is a palindrome, 
  and false otherwise. To determine if a word is a palindrome, we reverse the word by splitting 
  it into an array of characters, then calling the reverse() method on that array to reverse the 
  order of the characters, and finally joining the characters back together into a string. We 
  then check if the reversed word is equal to the original word, and return true if they are equal 
  (meaning the word is a palindrome), and false otherwise (meaning the word is not a palindrome).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
