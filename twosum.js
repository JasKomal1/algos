var twoSum = function(nums, target) {
    let storageObj = {}
    
    for(let i = 0; i < nums.length; i++){
        
        let secondNum = target - nums[i] // 9 -7 = 2
        
        let secondNumIndex = storageObj[secondNum] //{2:0,}
        
        if(secondNumIndex != null) {
            return [secondNumIndex,i]
        } else {
            storageObj[nums[i]] = i
        }
    }
};