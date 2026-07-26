class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        //first check the middle element in the array to see if it is smaller or larger than the target
        //then place the pointers accordingly
        let left = 0;
        let right = nums.length-1;
        if(nums[left] == target) return left;
        while(left < right) {
            
            let mid = parseInt((left+right)/2)
            if(target == nums[mid]) return mid;
            if(target < nums[mid]) {
                right = mid;
            }
            else {
                left = mid;
            }
            if (target == nums[left]) return left;
            if (target == nums[right]) return right;
            left++;
        }
        return -1;
    }
}
