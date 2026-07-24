class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //Scan array, store complementary num in a map with index as value
        //if complementary is found, return indices

        const map = new Map();
        let result =[];

        for (let i=0; i<nums.length; i++) {
            if(map.has(nums[i])) {
                result.push(i, map.get(nums[i]));
            } else {
                map.set(target-nums[i], i);
            }
        }
        return result;
    }
}
