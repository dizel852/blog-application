exports.sanitize = function(word) {
    return word.toLowerCase().replace(/-/g, ' ');
}

exports.tokenize = function(sentence) {
    return sentence.split(' ');
}

function foo() {
    if (5<7) {
        console.log("right");
    }
}

/*
this is comment
*/