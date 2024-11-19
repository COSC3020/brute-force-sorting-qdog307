function permutationSort(arr) {
    if (arr.length <= 1) return 0;
  
    const generatePermutations = (inputArr) => {
      let result = [];
  
      const permute = (arr, m = []) => {
        if (arr.length === 0) {
          result.push(m);
        } else {
          for (let i = 0; i < arr.length; i++) {
            let current = arr.slice();
            let next = current.splice(i, 1);
            permute(current.slice(), m.concat(next));
          }
        }
      };
  
      permute(inputArr);
      return result;
    };
  
    const permutations = generatePermutations(arr);
  
    let count = 0;
    for (let i = 0; i < permutations.length; i++) {
      count++;
      const permutation = permutations[i];
      if (isSorted(permutation)) {
        for (let j = 0; j < arr.length; j++) {
          arr[j] = permutation[j];
        }
        break;
      }
    }
  
    return count;
  }
  
  function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  
  module.exports = permutationSort;
  