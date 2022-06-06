//Answer.2:  program to display the cube of the number upto given an integer.
console.log("Ans: 2");    
console.log("Cubes of 5nos.");
function cubeOf(n) {
    for (let i = 1; i <= n; i++) {
        console.log(`${i} = ${i}x${i}x${i} = ${i**3}`);        
    }
}
// let num=+prompt("Enter the no. till you want cubes");
// cubeOf(num); // Using user data.
cubeOf(5); //sample data.
console.log("");

// ==========================================================================================>

//Answer.3:  program to display the n terms of odd natural number and their sum.
console.log("Ans: 3");    
console.log("Sum of Odd Natural No.");
function sumOfONNis(n) {
    let sum = 0;
    let k=1;
    sum +=k;
    for (let i = 1; i < n; i++) {
        k+=2;
        sum +=k;
    }
    console.log(`Sum of ${n} odd natural no is`,sum);
}
// let num=+prompt("Enter the no. till you want to sum Natural no.");
// sumOfONNis(num); // Using user data.
sumOfONNis(6); //sample data.
console.log("");

// ===========================================================================================>

// Answer.4: Program to print Nth prime number.(Input: 5, Output: 11, since 11 is the 5th prime number)

// let nthPrimeNum = parseInt(prompt("Enter the Position number of a  prime number:"));
let nthPrimeNum = 5; //sample data.
let num = 2;
let N = 0;
let i = 0;

while (i !== nthPrimeNum) {
    let count = 0;
    for (let j = 2; j < num; j++) {
        if (num % j === 0){
            count+=1
            // console.log(count);
            break;
        }
    }
    if (count === 0){
        i+=1;
        N = num;
        // console.log(N);
    }
    num = num+1;
} 
console.log(`${nthPrimeNum}th prime number is ${N}`);
 