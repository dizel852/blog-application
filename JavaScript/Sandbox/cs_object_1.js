// function Fencepost(x,y,postNum){
//     this.x = x;
//     this.y = y;
//     this.postNum = postNum;
//     this.connectionsTo = [];
//     this.sendRopeTo = function(connectedPost){
//         this.connectionsTo.push(connectedPost);
//     }

// }

// function Fencepost(x, y, postNum) {
//   this.x = x;
//   this.y = y;
//   this.postNum = postNum;
//   this.connectionsTo = [];
//   this.sendRopeTo = function(connectedPost) {
//     this.connectionsTo.push(connectedPost);
//   };
// }

// // create post18, post19, and post20

// var post18 = new Fencepost(-3,4,18);
// var post19 = new Fencepost(5,-1,19);
// var post20 = new Fencepost(-2,10,20);

// post18.sendRopeTo(post20);
// post20.sendRopeTo(post18);
// post18.sendRopeTo(post19);
// post19.sendRopeTo(post18);



// establish post connections



// function Fencepost(x, y, postNum) {
//     this.x = x;
//     this.y = y;
//     this.postNum = postNum;
//     this.connectionsTo = [];
// }

// Fencepost.prototype = {
//     sendRopeTo = function (connectedPost) {
//         this.connectionsTo.push(connectedPost);
//     },
//     removeRope = function (removeTo) {
//             var temp = [];
//             for (var i = 0; i < this.connectionsTo.length; i++) {
//                 if (this.connectionsTo[i].postNum != removeTo) {
//                     temp.push(this.connectionsTo[i]);
//                 }
//             }
//             this.connectionsTo = temp;
//         },
//     movePost = function (x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }

// Fencepost.prototype.valueOf() = function() {
//     return Math.sqrt(this.x * this.x + this.y *this.y);
// }

function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
}

Fencepost.prototype = {
  sendRopeTo: function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  },
  removeRope: function(removeTo) {
    var temp = [];
    for (var i = 0; i < this.connectionsTo.length; i++) {
      if (this.connectionsTo[i].postNum != removeTo) {
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  },
  movePost: function(x, y) {
    this.x = x;
    this.y = y;
  },
  valueOf: function() {
  return Math.sqrt(this.x * this.x +
                   this.y * this.y);
  }
};

// override the toString method
Fencepost.prototype.toString = function () {
    var list = "";
    for (var i = 0; i <= this.connectionsTo.length; i++) {
        list += this.connectionsTo[i].postNum + "\n";
    }
    return "Fence post #" + this.postNum + ":\n" +
        "Connected to posts:\n" + list +
        "Distance from ranch: " + this.valueOf() + " yards";
};

Fencepost.prototype.toString = function () {
    var list = "";
    for (var i = 0; i < this.connectionsTo.length; i++) {
        list += this.connectionsTo[i].postNum + "\n";
    }
    return "Fence post #" + this.postNum + ":\n" +
        "Connected to posts:\n" + list +
        "Distance from ranch: " + this.valueOf() + " yards";
};

<html>

</html>