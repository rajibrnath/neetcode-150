class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let map = new Map();
        let result =[];
        let index =1;

        for(let i=0; i<numbers.length; i++) {
            let complement = target - numbers[i];
            if(map.has(complement)) {
                result.push (map.get(complement), i+1)
            }
            else(map.set(numbers[i], i+1));

        }
        return result;
    }
}
