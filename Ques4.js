// QUES 4

function maxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
  
  let numArray = [4, 5, 10, -2];
  
  let maxValue = maxOfArray(numArray);

  console.log("Maximum value is " + maxValue)

  // Maximum value is 10
  