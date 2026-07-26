class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const lookupMap = {
            '(':')',
            '{':'}',
            '[':']'

        }
        

        for(let parenthesis of s) {
            if(stack.size==0 && !lookupMap[parenthesis]) {
                return false;
            }
            else if(lookupMap[parenthesis]){ 
                stack.push(parenthesis);
            } else {
                let top = stack[stack.length -1];
                if(parenthesis ==lookupMap[top]) {
                    stack.pop();
                } else return false;
            }
        }
        return stack.length ==0;
    }
}
