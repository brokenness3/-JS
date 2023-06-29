// Задание: Нужно реализовать функцию, возвращающая сумму всех аргументов, если тип аргумента - число. Вызовов ВСЕГДА 5

function count(num) {
    if (typeof num !== 'number') {
      return count;
    }
  
    let sum = num;
  
    function nextCount(nextNum) {
      if (typeof nextNum === 'number') {
        sum += nextNum;
      }
      return nextCount;
    }
  
    nextCount.toString = function () {
      return sum;
    };
  
    return nextCount;
  }
  
  console.log(+count(3)(2)(1)(5)(7));
  console.log(+count(6)(17)(3)(5)(7));
  console.log(+count(3)(null)(1)('asad')());