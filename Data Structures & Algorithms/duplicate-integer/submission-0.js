class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();
        for(let i=0; i<nums.length; i++) {
            if(map.get(nums[i])>0) {
                return true;
            }
            else {
                map.set(nums[i], 1)
            }
        }
        return false
    }
}
