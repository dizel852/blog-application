function multiply(x, y) {
    var result = 1 ;
    for(var i = 1; i<= y;i++){
        result*= x;
        console.log(result)
    }
    return result;
};

multiply(2,48);