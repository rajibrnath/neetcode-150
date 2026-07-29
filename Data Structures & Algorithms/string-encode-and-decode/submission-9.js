class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        
   
            for(let str of strs) {
                result += str.length + "#" + str;
            }
        
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let i =0;
        let result =[];
        while(i<str.length) {
            let j=i;
            while(str[j]!='#') {
                j++;
            }
            let strLength = parseInt(str.substring(i,j));

            result.push(str.substring(j+1, j+1+strLength));
            i = j+1+strLength;
        }
        return result;
    }
}
