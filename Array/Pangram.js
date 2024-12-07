/*
Approach:
- Create a Set from this string.
- Check if the Set size is equal to 26. If it is, then the sentence contains all the letters of the English alphabet.
- If the Set size is less than 26, then the sentence does not contain all the letters of the English alphabet.
- Return the boolean value.

*/


/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const unique=new Set(sentence);
    return unique.size>=26?true:false;
    
};