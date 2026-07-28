class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        const map = new Map();

        for(let num of nums) {
            if(map.has(num)) {
                map.delete(num);
            } else {
                map.set(num, 1)
            }
        }
        return map.keys().next().value;
    }
}
