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

        while(left <= right) {
            
            let mid = parseInt((left+right)/2)
            if(target == nums[mid]) return mid;
            if(target < nums[mid]) {
                right = mid-1;
            }
            else {
                left = mid+1;
            }

        }
        return -1;
    }
}
