// JavaScript solution

function twoSum(nums, target) {
  // to store the value and index of the elements
  let hashMap = [];
  for (let i = 0; i < nums.length; i++) {
    // Calculating the complement of the current element
    let complement = target - nums[i];
    // chking if the complement is already in the map
    if (hashMap[complement] !== undefined) {
      // If complement is found, return the indices
      return [hashMap[complement], i];
    }
    // Store the current element's value and index in the map
    hashMap[nums[i]] = i;
  }
}

// Example, test (use node to run the code)
let nums = [5, 7, 18, 9];
let target = 14;
let result = twoSum(nums, target);
console.log(result); // [0,3]

//Time Complexity: O(n)
// Space Complexity: O(n)
