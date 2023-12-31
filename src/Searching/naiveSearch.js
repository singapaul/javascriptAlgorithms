const naiveSearch = (string, subString) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === subString[0]) {
      let SubCount = 0;
      for (let j = 0; j < subString.length; j++) {
        if (string[i + j] === subString[j]) SubCount++;
        if (SubCount === subString.length) count++;
      }
    }
  }

  return count;
};

const teacherSolution = (string, subString) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < subString.length; j++) {
      if (string[i + j] !== subString[j]) break;
      if (j === subString.length - 1) count++;
    }
  }
  return count;
};

console.log(naiveSearch("hellosziabonjoursziasalut", "szia"));
console.log(teacherSolution("hellosziabonjoursziasalut", "szia"));
