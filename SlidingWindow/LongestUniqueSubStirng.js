
/**
 this problem is to get the maximum substring from the string and i try to solve it using 
 set i iterate through the string and  i ckeck if there exists the currient character and if it exists i remove the left substign and 
 when a new character exists i add to the set and update the length taking the maximimum of the provouse 
 longest substring and the current differnce in between the pointers..
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set=new Set();
    let left=0;
    let longest=0;

    for(let right=0; right<s.length;right++) {
       while(set.has(s[right])){
           set.delete(s[left]);
           left++;
       }
       set.add(s[right]);
       longest=Math.max(longest,right-left +1);
    }
   return longest;
};