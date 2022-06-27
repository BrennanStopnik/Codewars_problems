/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

function squareDigits(num){
    console.log(`Original Number: ${num}`)
    let strNum = num + "";
    let newStr = "";
    for (let i = 0; i < strNum.length; i++){
        newStr += strNum[i] ** 2;
    }
    return Number(newStr);
}
console.log("Answer: " + squareDigits(9119));