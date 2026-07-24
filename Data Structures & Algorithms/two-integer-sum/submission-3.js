class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //Scan array, store num in a map with index as value
        //scan and check for complementary in map, if found, return indices

        const map = new Map();
        let result =[];

        for (let i=0; i<nums.length; i++) {
            if(map.has(target-nums[i])) {
                return [map.get(target-nums[i]), i];
            } else {
                map.set(nums[i], i);
            }
        }
        return [];
    }
}
