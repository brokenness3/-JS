// Задание: Реализовать функцию plus()
// (1).plus(2); // 3

function plus() {
    return this + arguments[0];
  }
  
  Number.prototype.plus = plus;
  
  console.log((1).plus(2)); // 3
  console.log((7).plus(3)); // 10