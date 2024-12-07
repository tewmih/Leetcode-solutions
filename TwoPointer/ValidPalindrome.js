/*
aproach:
since the given string may contain non-alphanumeric characters
first, i removed those characters from the string and changed to lower case.
since palindromes have the same character when we try to read form the start to end ward and from 
the end to the beginning,
i put two pointers at the two ends and progress the left pointer to the right and the right pointer 
to the left until they meet. so if there no charcter defference untile then we can deduce that the 
string is palidrome..but on the way we iterate if there a difference in character between the left and 
right we can say not palidrome and return false

*/



/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    let left=0;
    let right=s.length-1;
    while(left<=right){
        if(s[left]!==s[right]) return false;

        left++;
        right--;
    }

   return true;
};
