const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    var minimum = array[i];
    var newMinIndex = array[i];
    for (let j = i; j < array.length; j++) {
      if (array[j] < minimum) {
        minimum = array[j];
        newMinIndex = j;
      }
    }
    if (minimum !== newMinIndex) {
      let oldMin = array[i];
      let newMin = array[newMinIndex];
      array[i] = newMin;
      array[newMinIndex] = oldMin;
    }
  }

  return array;
};

const teacherSolution = (array) => {
  for (var i = 0; i < array.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      var temp = array[i];
      array[i] = array[lowest];
      array[lowest] = temp;
    }
  }
  return array;
};

array = [5, 3, 7, 9, 22, 8, 1];
console.log(selectionSort(array));
console.log(teacherSolution(array));
