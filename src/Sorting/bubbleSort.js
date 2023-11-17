const bubbleSort = (array) => {

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array
};


const bubbleSortOptimised = (array) => {
    var noSwaps;
    for (var i = array.length; i > 0; i--) {
        noSwaps=true;
      for (var j = 0; j < i-1; j++) {
        if (array[j] > array[j + 1]) {
          var temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          noSwaps=false
        }
      }
      if(noSwaps) break;
    }
  
    return array
  };

console.log(bubbleSort([1, 7, 3, 7, 2]));
console.log(bubbleSortOptimised([1, 7, 3, 7, 2]))