/*
Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

For example:

['simple', 'is', 'better', 'than', 'complex'] ==> 7
Do not modify the input list.
*/




function longest(words) {
    let longest = words[0];
    for (let i = 0; i < words.length; i++){
      if (longest.length < words[i]){
        longest = words[i];
      }
    }
    return longest.length + 1; 
}
console.log(longest(['simple', 'is', 'better', 'than', 'complex']));