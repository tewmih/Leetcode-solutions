/**
 * 
 
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    let max = 0;

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] == nums2[j]) {
                let counter = 0;
                let x = i, y = j; // Use temporary variables for the inner loop
                while (x < nums1.length && y < nums2.length && nums1[x] == nums2[y]) {
                    counter++;
                    x++;
                    y++;
                }
                max = Math.max(max, counter);
            }
        }
    }

    return max;
};
