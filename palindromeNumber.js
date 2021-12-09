var isPalindrome = function(x){
    if(x < 0) return false

    return x === reverse(x)
}


var reverse = function(x) {
    let reverseNumb = 0 

    while (x > 0){
        reverseNumb = (x % 10) + (reverseNumb * 10)
        x = Math.floor(x / 10)
    }

    return reverseNumb
}

