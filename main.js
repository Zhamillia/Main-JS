// console.log("hello JS!");

/*console.error("hello JS!");
console.warn("hello JS!");*/

//!Переменные (именнованое хранилище)
//let,var,const

// console.log(birth);
// const birth = "15.08.2003";
// console.log(birth);
// console.log(birth);
// birth = "15.08.2000";

// console.log(lastname);
// let lastname = "Pavlova";
// console.log(lastname);
// lastname = "Pirogova";
// console.log(lastname);

// console.log(firstname);
// var firstname = "Anna";
// console.log(firstname);
// firstname = "Elena";
// console.log(firstname);
// называется хостинг

//! названия переменных
//! так нельзя
// нельзя ставить цифру в начало,
// let 5block =
// зарезервированные слова нельзя использовать
// let let
// пробелы нельзя ставить, засчитает за новую переменную
// let first name
// let first-name
// const Red = "jhff"

//! если так писать то работает
// let camelCase
// let color_orange
// const RED = "gdyegy"
// const $block = "" ;
// const number10 = 10;

//! типы данных
// 1 string
// let str = "strochka";
// console.log(str.length);
// console.log(str);

// const typeOfStr = typeof str;
// console.log(typeOfStr);

// console.log(typeof str);

// let str1 = "qwe";
// let str2 = "asd";
// let str = `zxc`;

//  2 number
// let num1 = 100;
// const PI = 3.14;
// console.log(typeof num1);

// 3 boolean
// const bool1 = true;
// const bool2 = false;

// 4 null - специальная пустота
// let error = null;

// 5 undefined
// let hello;
// console.log(hello);

// 6 object (object, array )
// object
// let user = {
//   name: " Diana Kim",
//   age: 20,
// };
// console.log(user.name);
// console.log(user.age);

// console.log(user["name"]);

// array
// let arr = [false, 100, true, {}, [], "hello"];
// console.log(arr.length);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[5]);

// 7 symbol
// let id = Symbol("ryfh");

// 8 bigInt для больших вычислений
// let int = 32345463n;

//! Math operators
// console.log(1 + 5);
// console.log(5 - 2);
// console.log(10 / 2);
// console.log(10 * 10);
// console.log(2 ** 3); /* возведение в степень*/
// console.log(10 % 7); /*остаток от деления */

//! -, /, *
// console.log("10" / "2");

// Nan -> not a number, некорректно
// console.log("hello" / 2);

// ! +
// concat - слияние
// console.log("10" + "2");
// console.log(10 + "2");
// console.log("10" + 2);

// ! true-false значения
// console.log(Boolean(0)); //false только 0 false
// console.log(Boolean(-1)); //true
// console.log(Boolean(null)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean("hello"));//true
// console.log(Boolean(""));//false

// ! сравнения
//! сторогое === (тип данных и значения должны быть равны)
// console.log(3 === 5); //false
// console.log(3 === 3); //true
// console.log(3 === "3"); //false
// console.log(3 !== 5); //true  // воскл знак значит не, неравны

//! нестрогое == (значения должны быть равны)
// console.log(3 == 3); //true
// console.log("3" == 3); //true
// console.log("3" != 3); //false

// ! >, <, =
// console.log(3 < 5); //true
// console.log(5 < 3); // false
// console.log(4 >= 4); //true
// console.log(4 <= 4); //true

// ! из string в number
//! +
// let elem = "10000";
// console.log(elem);
// console.log(+elem);

// ! parseInt
// переводит до точки,  а после нет
// let elem2 = "1000dkejfkjn";
// console.log(parseInt(elem2));

// ! parseFloat
// let elem3 = "100.2000dmjkjef";
// console.log(parseFloat(elem3));

// ! Number
// let elem4 = "10000";
// console.log(Number(elem4));

// !из number в string
// let num = 8990;
// console.log(num);
// console.log(typeof num.toString());
// console.log(String(num));

// ! alert, promt, confirm
// alert("Hello, user!");
// let firstName = prompt("Как вас зовут?");
// console.log(firstName);
//  интерполяция - встроенное выражение
// alert(`${firstName}, welcome!`);

// let value = confirm("Вам есть 18?");
// console.log(value);

let num1 = prompt("Введите первое число");
let operator = prompt("Введите математ. оператор");
let num2 = prompt("Введите второе число");
let result = eval(num1 + operator + num2); //"2+2"
alert(result);
