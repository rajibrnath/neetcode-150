class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const map = new Map();

        for(let i=0; i<=nums.length; i++) {
            if(!map.has(i)) {
                map.set(i, 1)
            } 
        }


        for(let num of nums) {
            if (map.has(num)) {
                map.delete(num);
            }
        }
  
        return map.keys().next().value;
    }
}
