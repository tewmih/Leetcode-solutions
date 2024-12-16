/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let left=0;
    let right=0;
    let prod=1;
    let count=0;
    while(right<nums.length) {
        if(nums[right]<k) {
            count++;
        }
        
        if(right!=0){
        if(prod<k) {
            count++;
            right++;
        }
        while(left<right && prod>k) {
            prod/=nums[left];
            left++;
        }
        }

    }
    return count;
    
};