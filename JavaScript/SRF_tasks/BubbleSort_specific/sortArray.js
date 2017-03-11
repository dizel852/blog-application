/**
 * Created by vpetrov on 09-Aug-16.
 */

// var array = [1, 3, 5, 7, 2, 4, 6];
/*console.log("Unsorted: "+array);
bubbleSort(array);
console.log("Sorted: "+array);

function bubbleSort(array) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < array.length-1; i++) {
            if (array[i] > array[i+1]) {
                var temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}    */

var specificArray;
specificArray = {
    name: "specificArray",
    ar: [1, "4", 7, true, "5", "8", "Hello", 6, "James", 5 / "kyky", 3],
    size: 1000,
    color: "blue"
};

var secondArray = specificArray.ar;

console.log("Unsorted: "+secondArray);
bubbleSort(secondArray);
console.log("Sorted: "+secondArray);

function bubbleSort(secondArray) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < secondArray.length-1; i++) {

            if (secondArray[i] ) {

            } else {

            }


            /*  if (secondArray[i] > secondArray[i+1]) {
                var temp = secondArray[i];
                secondArray[i] = secondArray[i+1];
                secondArray[i+1] = temp;
                swapped = true;
            }
       */ }
    } while (swapped);
}