// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.


// S: Create a 

// T:

// A:

// E:


const sumOfAllMultiples = (num) => {
//create a counter that gets incrimented by every number divisible by 3 or 5
    let count = 0
//create for loop that checks each integer less than 100 and adds said integer to count if divisible by 3 or 5
    for (let i = 1; i < num; i++){
        if (i % 3 == 0 || i % 5 == 0){
            count += i
        }
    }
//return total of all integers < 1000
    return count
}

console.log(sumOfAllMultiples(1000))
//should return 233168

console.log(sumOfAllMultiples(5))
//should return 3

console.log(sumOfAllMultiples(10))
//should return 23
