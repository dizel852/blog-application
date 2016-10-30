var text = "Hi guys, my name is Vladimir! I like nodeJS! Vladimir is my Name";
var myName = "Vladimir";
var hits = [];

for(var i=0; i<text.length; i++){
    if (text[i] === "V" ){
        for(var j=i; j<(myName.length + i); j++)
        {
            hits.push(text[j])
            }
        }
    }
if (hits.length === 0){
    console.log("Your name wasn't found")
} else {
    console.log(hits);
}
