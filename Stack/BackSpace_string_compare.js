/*
Approach:
- I used a stack data structure to solve this problem.
- I iterated over the input strings, whenever I encountered a '#', I popped the top element from the stack.
- If the character was not '#', I pushed it onto the stack.
- After processing both strings, I joined the stack elements back into strings and compared them.
- If they were equal, the strings were backspace-equivalent, so I returned true. Otherwise, I returned false.
*/



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    

    

    function stackProcessor(str){
    const stack=[]
    for(let c of str){
        if(c=='#' ){
            if(stack.length>0){

            stack.pop();
            }
        }else{
            stack.push(c);
        }
    }
    return stack.join("");
    }
   return stackProcessor(s)===stackProcessor(t);
}