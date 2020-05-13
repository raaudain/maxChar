// Common string questions
// What is the most common character in the string?
// Does string A have the same characters as string B (it it an anagram)?
// Does the given string have any repeated characters in it?

function maxChar(str){

  // Solution #1
  const characters = {};
  let max = 0;
  let maxChar = "";

  for (let character of str){
    // if (!characters[character]){
    //   characters[character] = 1
    // }
    // else{
    //   characters[character]++;
    // }

    // Solution #1.2
    // If null or NaN add 1
    characters[character] = characters[character] + 1 || 1;
  }

  for (let char in characters){
    if(characters[char] > max){
      max = characters[char];
      //console.log(max)
      maxChar = char;
      //console.log(maxChar)
    }
  }

  return maxChar;


  // Solution #2

  const charMap = {};
  let maxNum = 0;
  let maxChar = "";

  str.split("").forEach(char => charMap[char] = charMap[char] + 1 || 1);

  for (let char in charMap){
    if(charMap[char] > maxNum){
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;

}

// maxChar("abccccccd")
maxChar("apple 1231111")