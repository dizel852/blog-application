var isEven = function(number) {
    if (!isNaN(number)){
         if (number % 2 === 0 ) {
             console.log("true")
             return true
             
             } else {
                console.log("false")
                return false;
                }
      } else {
        console.log("This is not a number!")
        }    
  
};

isEven("dfdf");