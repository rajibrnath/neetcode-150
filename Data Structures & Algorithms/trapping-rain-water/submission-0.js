class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxWater = 0;
        let left=0;
        let right= height.length-1;

        let leftMax = height[left];
        let rightMax = height[right];

        if(!height) return 0;

        while(left < right) {
            if(leftMax < rightMax) {
                left++;
                leftMax = Math.max(leftMax, height[left]);
                maxWater += leftMax - height[left];
                

            } else {
                right--;
                rightMax = Math.max(rightMax, height[right]);
                maxWater += rightMax - height[right];
                

            }
        }
        return maxWater;
    }
}
