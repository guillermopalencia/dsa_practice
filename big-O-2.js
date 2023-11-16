// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 
// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

const onceOrTwice = (nums) => {
//create a empty hash to fill keys with num array integers
    const hash = {}
//for loop that populates the empty hash with key value pairs of each integer in nums array, and how many times they are repeated
    for (let i = 0; i < nums.length; i++){
    if (nums[i] in hash){
        hash[nums[i]]++
    } else {
        hash[nums[i]]=1;
    }
} console.log(hash)
//final check that  returns true if any integers appear twice or more
    for (i in hash){
        if (hash[i] >= 2){
            return true
        }
    } 
//will automatically return false if none of the integers appear twice.
    return false
}

//should return true
console.log(onceOrTwice([1,1,1,3,3,4,3,2,4,2]))
console.log(onceOrTwice([1,2,3,4,1,2,3]))
console.log(onceOrTwice([0,1,1,1,3,3,4,3,2,4,2,6]))

// Input: nums = [1,2,3,4]
// Input: nums = [1,2,3,4]

//should return false
console.log(onceOrTwice([1]))
console.log(onceOrTwice([1,2,3,4,5]))
console.log(onceOrTwice([3,6,9]))