class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    const map = {};

    for(let i=0; i<nums.length; i++) {
  
        if(map[nums[i]]) {
            map[nums[i]] = map[nums[i]]+1;
        } else{
            map[nums[i]] =1;
        }
    }

    const keysSortedArray = Object.keys(map).sort((a,b)=> map[b] -map[a]);

    let result=[];

    for(let i=0; i<k; i++) {
        result.push(keysSortedArray[i])
    }
    return result;
    }
}
