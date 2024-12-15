/**
 i have solved this problem by adding each consecutive array elements until they satisfy the condition
 the target and if the sum is greater than the target i try again to shrink from the left
 trying to find the minimum length of index and at the same time you have to minimize the 
 sum,
 finally i return the minimum length
 */


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minWindow=Infinity;
    let currentSum=0;
    let startWindow = 0;
    for(let i = 0; i < nums.length; i++) {
        currentSum+=nums[i];
        while(currentSum>= target && startWindow <=i) {
            minWindow=Math.min(minWindow,(i-startWindow)+1);
            currentSum-=nums[startWindow];
            startWindow++;
        }
    }
    return minWindow==Infinity?0:minWindow;
};

