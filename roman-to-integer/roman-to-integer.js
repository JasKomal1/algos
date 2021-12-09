/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanObj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
        
    }
    
    let count = 0; 
    
    for(let i = 0; i < s.length; i++) {
        let firstNum = romanObj[s[i]]
        let secondNum = romanObj[s[i + 1]]
        
        if(secondNum){
            if(firstNum >= secondNum){
                count += firstNum
            } else {
                count += secondNum - firstNum
                i++
            }
                
        } else{
            count += firstNum
        }
    }
        
    return count
};