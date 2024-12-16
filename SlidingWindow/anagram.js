/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const map = new Map();
    const window = new Map();
    const result = [];
    
    // Initialize the frequency map for `p`
    for (const char of p) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    
    let left = 0, right = 0;
    
    // Expand the sliding window
    while (right < s.length) {
        const char = s[right];
        window.set(char, (window.get(char) || 0) + 1);
        right++;
        
        // If the window size matches `p`, check for anagram
        if (right - left === p.length) {
            if (isEqual(map, window)) {
                result.push(left);
            }
            
            // Shrink the window from the left
            const leftChar = s[left];
            if (window.get(leftChar) === 1) {
                window.delete(leftChar);
            } else {
                window.set(leftChar, window.get(leftChar) - 1);
            }
            left++;
        }
    }
    
    return result;
};

// Helper function to compare two maps
function isEqual(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (const [key, val] of map1) {
        if (map2.get(key) !== val) return false;
    }
    return true;
}
