/**
   the way i have solved this problem is
   first i check if the element exists in the set if not i add to the currentSum
    and also add into the set.but if the element exists i go through elements until i
    found another unique element from the array and remove from the left and 
    from the sum then i canlculate the max from the current maxiumu and the current sum
    then finally i return the maximum sum.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let max=0;
    let currentSum=0;
    let set =new Set();
    let count=0;
    let left=0;

    for(let i=0;i<nums.length;i++){
        while(set.has(nums[i])){
            currentSum-=nums[left];
            set.delete(nums[left]);
            left++;
            }
        currentSum+=nums[i];
        set.add(nums[i])

        if((i-left)+1===k){
            max=Math.max(max,currentSum);
            currentSum-=nums[left];
            set.delete(nums[left])
            left++;
        }

    }

    return max;
    
};