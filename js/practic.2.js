/*
 * Функция это частый случай объекта -> ССЫЛОЧНЫЙ ТИП
 */

//  console.log('[] === []: ', [] === []);
//  console.log('{} === {}: ', {} === {});
//  console.log(
//      'function() {} === function() {}: ',
//      function () {} === function () {},
//  );

//  const fnA = function () {
//     console.log('Hello');
//  };

//  const fnB = fnA;
//  console.log('fnb === fnA: ', fnB === fnA); 


/**
 * Контекст (this)
 *  - Где и как была объявлена ф-я НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
 *  - Контекст определяется В МОМЕНТ ВЫЗОВА Ф-И, если он не привязан явно.
 */

 /**
  * Как метод объекта. В контексте объекта.
  */

//   const user = {
//       tag: 'Mango',
//       showTag() {
//           console.log('showTag -> this', this);
//       },
//   };

//   user.showTag();




/**
 * Вызов без контекста
 *  - В строгом режиме = undefined
 *  - Не в строгом режиме = window
 */

//  const foo = function () {
//      console.log('foo -> this', this);
//  };

//  foo();




/**
 * Как метод объекта, но объявлена как внешняя функция.
 * В контексте объекта.
 */

//  const showTag = function () {
//      console.log('showTag -> this', this);
//      console.log('showTag -> this.tag', this.tag); 
//  };

// //  showTag();

//  const user = {
//      tag: 'Mango',
//  };

//  user.showUserTag = showTag;
//  console.log('user', user);

//  user.showUserTag();




/**
 * Вызов без контекста, но объявлена как метод объекта.
 */

//  const user = {
//      tag: 'Mango',
//      showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);  
//      },
//  };

//  user.showTag();

//  const outerShowTag = user.showTag;

//  outerShowTag(); 




// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag); 
//     },
// };

// const invokeAction = function (action) {
//     console.log(action);

//     action();
// };

// invokeAction(user.showTag);




const counter = {
    value: 0,
    increment(value) {
        console.log('increment -> this', this)
        this.value += value;
    },
    decrement(value) {
        console.log('decrement -> this', this) 
        this.value -= value;
    },
};

const updateCounter = function (value, operation) {
    operation(value);
};

updateCounter(10, counter.increment); // Будет undefined
updateCounter(5, counter.decrement);  // Будет undefined
// При передачи методов объекта как call back контекст не сохраняется
