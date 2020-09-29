// const doMath = function (a, b, callback) {
//     const result = callback(a,b);

//     console.log(result);
// };
// /*
// const add = function (x, y) {
//     return x + y;
// };

// const sub = function (x, y) {
//     return x - y;
// };

// doMath(3, 2, add);
// doMath(10, 4, sub);
// */ 

// doMath(3, 2, function (x, y) {
//     return x + y;
// });

// doMath(10, 4, function (x, y) {
//     return x - y;
// });


/* 
    Отложеный вызов: интервалы
*/

// const callback = function () {
//     console.log('Через 2 секунды внутри колбека в таймауте');
// };

// console.log('В коде перед таймаутом');

// setTimeout(callback, 2000);

// console.log('В коде после таймаутом')


/* 
    ФИльтр
*/

// const filter = function (array, test) {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }
//     return filteredArray;
// };

// // 1. Нужно передать функцию
// // 2. Функция получает элемент массива
// // 3. Если элемент массива удовлетворяет условие то функция вернет true
// // 4. Если элемент массива не удовлетворяет условие то функция вернет false

// const callback1 = function (value) {
//     return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function (value) {
//     return value <= 4;
// };

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], callback2);
// console.log(r2);

// const fruits = [
//     {name: 'apples', quantity: 200, isFresh: true},
//     {name: 'grapes', quantity: 150, isFresh: false},
//     {name: 'bananas', quantity: 100, isFresh: true},
// ];

// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >=120;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);



/* 
    Функция результатов своей работы может возвращать другую фунцкию.
    Возвращаемая функция во время вызова будет иметь доступ
    ко всем локальным переменным (области видимости)
    родительской функции (той из которой её вернули),
    это называется "Замыкание".
*/

// const fnA = function (parametr){
//     const innerVariable = 'значение внутренней переменной функции fnA';

//     const innerFunction = function () {
//         console.log(parametr);
//         console.log(innerVariable);
//         console.log('Это вызов innerFunction');
//     };

//     return innerFunction;
// };

// const fnB = fnA(555);

// fnB()

// console.log(fnB);


/**
 * Округлятор
 */

//  const rounder = function (places) {
//      return function (number) {
//          return Number(number.toFoxed(places));
//      };
//  };

// const rounder2 = rounder(2);
// const rounder2 = rounder(3);

// console.dir(rounder2);
// console.dir(rounder2);

// console.log(rounder2(3.4567));
// console.log(rounder3(3.4567));
// console.log(rounder2(5.1234));
// console.log(rounder3(3.4568));


/**
 * Приватные данные и ф-и - скрытие реализации, интерфейс
 */

//  const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//      let salary = baseSalary;

//     //  const changeBy = function (amount) {
//     //      salary += amount;
//     //  };

//      return {
//          raise(amount) {
//              salary += amount;
//          },
//          lower(amount) {
//             salary -= amount;
//          },
//          current() {
//              return `Тукущая зарплата ${employeeName} - ${salary}`;
//          },
//      };
//  };

//  const salaryManager = salaryManagerFactory('Mango', 5000)

//  console.log(salaryManager);



/**
 * Стрелочные ф-и
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 * - Неявный возврат объекта
 */


//  const add = function(a, b, c) {
//      console.log(a, b, c);
//      return a + b + c;
//  };

//  const addArrow = (a, b, c) => {
//      console.log(a, b, c);
//      return a + b + c;              /* Явный возврат */
//  };                                          

// //  const addArrow = (a, b, c) => a + b + c; /*Неявный возврат*/

//  console.log(add(5, 10, 15));



const fnA = function () {
    return {
        a: 5,
    };
};

console.log(fnA());

const arrowFnA = () => ({ arrowA: 5});

console.log(arrowFnA());
