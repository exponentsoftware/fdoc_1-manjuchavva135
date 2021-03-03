function checkUniqueness(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        // if the elements match, this wouldn't be a unique array
        if (i !== j && arr[i] === arr[j]) {
          return false;
        }
      }
    }
    return true;
  }
  const arrOne = [1, 4, 6, 2, 1];
  console.log(checkUniqueness(arrOne));
  const arrTwo = [1, 4, 6, 2, 3]
  console.log(checkUniqueness(arrTwo));