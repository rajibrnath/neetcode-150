class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //take first string, put all chars in a map with count as value
        const map = new Map();
        for(let char of s) {
            if(map.has(char)) {
                map.set(char, map.get(char)+1);
            } else{
                map.set(char, 1);
            }
        }
        console.log(map);
        //take second string, loop through all chars and check in the map to verify count
        for (let char of t) {
            if(map.get(char)) {
                map.set(char, map.get(char) -1);
                if(map.get(char)==0) {
                    map.delete(char);
                }
            } else {
                return false;
            }

        }
        console.log(map);
        if(map.size) {
            return false;
        } else return true;
    }
}
