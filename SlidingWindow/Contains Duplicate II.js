/*
This problem is solved by using a hashmap to keep track of the last seen index of each number. 
If we encounter a number that has already been seen and the absolute difference between the current index and the last seen index is less than or equal to k, then we have found a duplicate.

This solution has a time complexity of O(n), where n is the length of the input array.

The space complexity is O(k), where k is the maximum distance between two distinct elements. This is because we store the last seen index of each number in a hashmap.

*/



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let seen =new Map();
    for(let i in nums){
        if(seen.has(nums[i])){
            // let key=[...seen].find((key,value)=>key==nums[i]);
            let index=seen.get(nums[i]);
            if(Math.abs(i-index)<=k){
                return true;
            }else{
                // update
                seen.set(nums[i],i);
            }
        }else{
            //push to map
            seen.set(nums[i],i)

        }
    }
    return false;
    
};