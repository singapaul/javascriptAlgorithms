const insertionSort = (arr) => {
    var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
};

const array = [22, 5, 13, 8, 2, 8];
console.log(insertionSort(array));
