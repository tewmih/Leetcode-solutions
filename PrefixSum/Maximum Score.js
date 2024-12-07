
/* 
Approach:
solution 1:
-using the builtin function i #slice the given string into left and right substring
-in each iteration i get different length of left and right substring
-using a regular expression matching, i try to get the number of zeros from the left 
substring and ones from the right substring.
-sum the total of ones and zeros and compare with previous maximum sum of zeros and ones
-return the maximum sum

    // solution 2:
    -in first loop i try to find the total sum of ones.
    -in the second loop i try to find the total sum of zeros and ones using the totalones as reference.
    -compare the sum with the previous maximum sum 
    - return the maximum sum

*/ 


/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    // let max=0;
    // let left,right;

    // for(let i=1;i<s.length;i++){

    //  left=s.slice(0,i);
    //  right=s.slice(i,s.length);

    //  let sum=(left.match(/0/g)||[]).length+(right.match(/1/g)|| []).length;
    //  max=Math.max(sum,max)


    // }
    // return max;
    let totalOnes=0;

    for(let i=0;i<s.length;i++){
        if(s[i]=='1') totalOnes++;
    }

    let zeroCount=0,oneCount=0,sum=0,max=0;

    for(let i=0;i<s.length-1;i++){
        if(s[i]=='0'){
            zeroCount++;
        }else{
            oneCount++;
        }
        sum=(totalOnes-oneCount)+zeroCount
        max=Math.max(max,sum)
    }
   return max;
};