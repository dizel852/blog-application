// function addToArray(callback){
//     array = [];
//     for(i=0; i<10; i++){
//         array.push(i);
//     }
//     callback(array);
// }

// addToArray(function(){
//     console.log("callback!!!")
//     console.log(array);
// });



var boo = (function(){
    var counter = 0;
    return function add(){
        return counter++;
    };
})();
// boo()();
boo();
boo();
boo();
boo();
boo();
boo();
boo();
boo();
boo();
boo();
boo();
boo();
boo();
boo();
console.log(boo());
