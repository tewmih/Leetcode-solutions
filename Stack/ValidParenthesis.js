/*
i created a class of stack enables to push, pop and return the size of the stack
and then if the input is '(' we push to the stack but when i get ')' we pop and 
calculates the max size each time when we push to the stack..
and finally it returns one time found max value;

 */

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    class Stack {
        constructor() {
            this.stack = [];
        }

        push(element) {
            this.stack.push(element);
        }

        pop() {
            if (this.stack.length > 0) {
                return this.stack.pop();
            }
            return null; // Prevents errors on unmatched ')'
        }

        size() {
            return this.stack.length;
        }
    }

    const stack = new Stack();
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
            max = Math.max(max, stack.size());
        } else if (s[i] === ')') {
            stack.pop(); // Only pop if stack is not empty
        }
    }

    return max;
};
