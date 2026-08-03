class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left=0;
        let right = 0;

        let longest = 0;
        let window = new Set();

        while (right < s.length) {
            if(!window.has(s[right])) {
                window.add(s[right]);
                longest = Math.max(window.size, longest);
                right++;
            }
            else {
                window.delete(s[left]);
                left++
            }
        }
        return longest;
    }
}
