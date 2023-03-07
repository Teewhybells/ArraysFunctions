// QUES 5

function valTimesIndex(arrayOfNum) {
    return arrayOfNum.map(function (value, index) {
        return value * index;
    });
  return arrayOfNum.map(function (value, index) {
    return value * index;
  });
}

let arrayOfNum = [5, 10, 15];
let multipliedArray = valTimesIndex(arrayOfNum);
console.log(multipliedArray);
// [ 0, 10, 30 ]