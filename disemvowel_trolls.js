/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

/*
The function takes a string as a parameter.
Set up a new string to add the consonants to.
The for loop only needs to go to the length of the string it's assessing.
Set each index to lowercase with a variable, lower, before checking it so you don't have to worry about making the entire string upper or lower then figuring out how to make it go back to the original state.
Check to make sure no vowels are let into the new string with "lower !== vowel".
Add teh consonants to new string.
Return new string
Console.log and call the function with the string as the parameter.
*/



function disemvowel(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++){
        let lower = str[i].toLowerCase()
        if (lower !== "a" &&
            lower !== "e" &&
            lower !== "i" &&
            lower !== "o" &&
            lower !== "u" 
            ){
            newStr = newStr + str[i];
        }
    }
    return newStr;
}
console.log(disemvowel("Hello, this is Brennan and I'm in a coding school."));

