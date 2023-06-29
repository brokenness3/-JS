// Задание 1
// Реализовать функцию convertArrToObj, которая на вход принимает массив значений, а на выход отдает объект, где ключ - это индекс элемента в массиве, а значение - сам элемент
// const arr = [1, null, 'test', undefined]
// const obj = convertArrToObj()
// console.log(obj) // { 0: 1, 1: null, 2: 'test', 3: undefined }

function convertArrToObj(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
      obj[i] = arr[i];
    }
    return obj;
  }
  
  const arguments = [1, null, 'test', undefined];
  const obj = convertArrToObj(arr);
  console.log(obj);
  
  // Задание 2
  // Требуется реализовать функцию countFromArr, которая позволяет подсчитать значения массива. На вход поступает массив, на выход получаем объект, где ключ - это элемент массива, а значение - его кол-во в массиве
  // const arr = [1, 1, 1, 'test', 'test']
  // const res = countFromArr(arr)
  // console.log(res) // { 1: 3, test: 2 }
  
  function countFromArr(arr) {
    const countObj = {};
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (countObj[element]) {
        countObj[element] += 1;
      } else {
        countObj[element] = 1;
      }
    }
    return countObj;
  }
  
  const arr = [1, 1, 1, 'test', 'test'];
  const res = countFromArr(arr);
  console.log(res);
  
  // Задание 3
  // Требуется реализовать функцию groupByField, которая позволяет сгруппировать массив объектов по определенному полю этого объекта. На вход поступает массив объектов и строка с названием нужного поля, на выход объект - где ключом является значение поля объекта, а значением - массив объектов где значение в поле равно этому ключу 🤪 (надеюсь в примере будет понятней). Пример:
  // const arr = [{test: 1},{test: 2},{test: 3},{test: 1},{test: 1}]
  // const res = groupByField(arr, 'test')
  // console.log(res) // { 1: [{test: 1}, {test: 1}, {test: 1}], 2: [{test: 2}], 3: [{test: 3}]}
  
  function groupByField(arr, field) {
    const groupedObj = {};
    for (let i = 0; i < arr.length; i++) {
      const obj = arr[i];
      const value = obj[field];
      if (groupedObj[value]) {
        groupedObj[value].push(obj);
      } else {
        groupedObj[value] = [obj];
      }
    }
    return groupedObj;
  }
  
  const arr = [{test: 1},{test: 2},{test: 3},{test: 1},{test: 1}];
  const res = groupByField(arr, 'test');
  console.log(res);