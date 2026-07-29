class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = new Array(nums.length);
        //First stroe all the left product values except for the value at current index
        //For index 0, the product of all elements to the left of it, except it's own value would be 1
        result[0]=1;
        
        for(let i=1; i<nums.length; i++) {
            result[i] = result[i-1] * nums[i-1];

        }
        //for the rightmost element, the right product of all elements to the right of it will be 1
        //And this time, we will be totalling the value i.e. leftProduct * rightProduct
        //result[r] contains the leftProduct already.

        let rightProduct = 1;
        for(let r=nums.length-1; r>=0; r--) {
            result[r] = rightProduct * result[r];

            rightProduct *= nums[r]
        }
        return result;
    }
}
