// : For loops  
// 1. Print numbers from 1 to 10.  
// 2. Print all even numbers between 1 and 20.  
// 3. Calculate the sum of all numbers from 1 to 100 and print the result. Hint: ‘+=’  
// 4. const numbers = [1, 2, 3, 4, 5]. Given the array of  numbers, print each 
// element to the console.  
// 5. const numbers = [3,7, 2, 5, 10, 6]. Given the array of numbers, find and print 
// the largest number.  
// #Hint: current value and previous value. 


console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Even numbers between 1 and 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let sum = 0; 
for (let i = 1; i <= 100; i++) {
    sum += i; 
}
console.log("Sum of all numbers from 1 to 100:", sum);

const num1 = [1, 2, 3, 4, 5];
console.log("Elements in the array [1, 2, 3, 4, 5]:");
for (let i = 0; i < num1.length; i++) {
    console.log(num1[i]);
}

const numbers2 = [3, 7, 2, 5, 10, 6];
let largestNumber = numbers2[0]; 

for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largestNumber) {
        largestNumber = numbers2[i]; 
    }
}

console.log("The largest number in the array [3, 7, 2, 5, 10, 6]:", largestNumber);