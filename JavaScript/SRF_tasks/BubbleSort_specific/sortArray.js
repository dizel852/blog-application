/**
 * Created by vpetrov on 09-Aug-16.
 */

var array = [1, 3, 5, 7, 2, 4, 6];
console.log("Unsorted: "+array);
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
}