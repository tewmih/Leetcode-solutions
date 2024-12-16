/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    // Helper function to count subarrays with at most `k` distinct integers
    const atMostKDistinct = (nums, k) => {
        const map = new Map();
        let count = 0;
        let left = 0;

        for (let right = 0; right < nums.length; right++) {
            map.set(nums[right], (map.get(nums[right]) || 0) + 1);

            // Shrink the window until we have at most `k` distinct integers
            while (map.size > k) {
                map.set(nums[left], map.get(nums[left]) - 1);
                if (map.get(nums[left]) === 0) {
                    map.delete(nums[left]);
                }
                left++;
            }

            // Add the number of subarrays ending at `right`
            count += right - left + 1;
        }

        return count;
    };

    // Exactly k distinct = AtMostKDistinct(k) - AtMostKDistinct(k - 1)
    return atMostKDistinct(nums, k) - atMostKDistinct(nums, k - 1);
};
