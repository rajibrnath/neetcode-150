class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let result = new Set(nums);

        let maxStreak =0

        for(let num of result) {
            if(result.has(num-1)) continue;
            else {
                let currStreak = 1;
                while(result.has(num+1)) {
                    currStreak++;
                    num+=1;
                }
                if(currStreak > maxStreak) {
                maxStreak = currStreak;
            }
            }

        }
        return maxStreak;
        }
}
