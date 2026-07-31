class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0;
            let j=0;
            let k = heights.length-1;

            while(j<k) {
                let currWater = 0;
                currWater = Math.min(heights[j], heights[k]) * (k-j);

                if(heights[j]<heights[k]) {
                    j++;
                } else if(heights[j]>=heights[k]) {k--;}
                if(currWater > maxWater) {
                maxWater = currWater;
            }
            }
            return maxWater;

        }
        
    
}
