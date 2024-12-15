/*
i is the common way to solve slding window problems.
first you add up until the sliding window reaches its limit and 
you check the max avarage and subtract the left side of the array.
then you return the max average of the subarray.
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum=0;
    let left=0;
    // let right=k;
    // for(let i=0;i<k;i++){
    //   sum+=nums[i];
    // }
    // let max=sum/k;
    // while(right<=nums.length){
    //     if((sum/k)>max){
    //         max=sum/k;
    //     }
    //     sum=sum+nums[right]-nums[left]
    //     right++;
    //     left++;
    // }
    let max=-Infinity;
    for(let i=0;i<nums.length;i++) {
        sum+=nums[i];

        if((i-left)+1==k){
            max=Math.max(max,sum/k);
            sum-=nums[left];
            left++;

        }
    }
    return max;
};