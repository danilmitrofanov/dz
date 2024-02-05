1)const findLongestWord = (arr) => {
    let longestWord = "";
    for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
    longestWord = arr[i];
    }
    }
    return longestWord;
    }
    console.log(longest)
2)const sumUniqueNumbers = (arr) => {
    let uniqueNumbers = [];
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++;
        }
      }
      
      if (count === 1) {
        uniqueNumbers.push(arr[i]);
        sum += arr[i];
      }
    }
}      
3)const mergeArrays = (...arrays) => {
    const mergedArray = [].concat(...arrays); 
  
    return Array.from(new Set(mergedArray)); 
  }
4)const hasProperty = (obj, propertyName) => {
    return obj.hasOwnProperty(propertyName);
}