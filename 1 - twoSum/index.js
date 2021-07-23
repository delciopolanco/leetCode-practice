/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var previous = [];
    var needed = null;
    var index2 = null;

    for(var i = 0 ; i <= nums.length - 1; i++) {
        needed = target - nums[i];// 6 -
        index2 = previous[needed];//
        
        if(index2 != null) return [index2, i];
      
        previous[nums[i]] = i;
    }
    
};

console.log(twoSum([3,2,3], 6));
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));