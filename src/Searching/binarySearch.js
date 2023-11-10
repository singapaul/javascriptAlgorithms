function binarySearch(array, value){
    // add whatever parameters you deem necessary - good luck!
       let low = 0;
      let high = array.length - 1;
  
      while (low <= high) {
          const mid = Math.floor((low + high) / 2);
          const guess = array[mid];
  
          if (guess === value) {
              return mid; // Found the value, return its index
          } else if (guess > value) {
              high = mid - 1; // Value is in the left half
          } else {
              low = mid + 1; // Value is in the right half
          }
      }
  
      return -1; // Value not found in the array
    
    }

const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
];

console.log(binarySearch(array, 5));
