class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //normalize the string
        //two pointers one from left, one from right
        //if both points to the same char till the mid then palindrome, else not.

    const normalized = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    let left =0; 
    let right = normalized.length-1; 

    while(left < right) {
            if(normalized.charAt(left) != normalized.charAt(right)) {
            
            return false;
        }
        left++;
        right--;
    }
    return true;
    }
}
