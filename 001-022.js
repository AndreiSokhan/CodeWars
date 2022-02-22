// 1. Удалить первый и последний символы
function removeChar(str) {
   //You got this!
   return str.slice(1, -1);
};

//2. Перевернутые строки
//split -- разбивает строку на символы;
//reverse -- переворачивает массив;
//join -- собирает строку из массива.
function solution(str) {
   return str.split("").reverse().join("");
}

//3. MakeUpperCase
function makeUpperCase(str) {
   return str.toUpperCase();
}

//4.Это палиндром?
function isPalindrome(x) {
   // turn the string to lowercase
   x = x.toLowerCase()
   // reverse input string and return the result of the
   // comparisong
   return x === x.split('').reverse().join('')
}

//5. Преобразовать число в перевернутый массив цифр
function digitize(n) {
   n = String(n).split('').reverse().map(Number);
   return n;
}

//6. Напишите функцию, которая повторяет строку n раз
function repeatStr(n, s) {
   var new_s = '';
   while (n-- > 0) new_s += s;
   return new_s;
}

// или
function repeatStr(n, str) {
   return str.repeat(n);
}

//7.Базовое присвоение переменной
var a = "code";
var b = "wa.rs";
var name = a + b;


//8. Удаление глассных
function shortcut(string) {
   return string.replace(/[aeiou]+/g, "");
}

//9 Создайте функцию, которая возвращает массив целых чисел от n до 1, где n>0.
const reverseSeq = n => {
   let newArr = Array()
   for (let i = 1; i <= n; i++) newArr.push(i)
   return newArr.reverse();
};

//10. Создать функцию, которая возвращает количество гласных в принимаемой строке
function findVawels(str) {
   let count = 0;
   const vawels = ["a", "e", "i", "o", "u"];

   for (let char of str.toLowerCase()) {
      if (vawels.includes(char)) {
         count += 1;
      }
   }

   return count;
}

//11.
function countSheeps(arrayOfSheep) {
   const present = arrayOfSheep.filter(sheep => sheep);
   return present.length;
}

//12. Получить среднее значение массива
function getAverage(marks) {
   var sum = 0;
   for (var i = 0; i < marks.length; i++) {
      sum += marks[i];
   }
   return Math.floor(sum / marks.length);
}

//13. Преобразование числа в строку!
function numberToString(num) {
   return value = String(num);
}

//14. Третий угол треугольника
function otherAngle(a, b) {
   return (180 - (a + b));
}

//15. Рассчитать среднее значение чисел массива
function find_average(array) {
   if (array.length === 0)
      return 0;

   let sum = 0;

   for (let i = 0; i < array.length; i++) {
      sum += array[i];
   }
   return sum / array.length;
}

//16.Создайте функцию, которая возвращает значение, умноженное на 50 и увеличенное на 6. Если введенное значение является строкой, оно должно возвращать «Ошибка».
function problem(x) {
   if (typeof x !== 'number') {

      return "Error";
   }

   return x * 50 + 6;
}

//17.Реализуйте функцию, определяющую, является ли строка, изограммой.
function isIsogram(str) {
   const normalized = str.replace(/\s/g, '').toLowerCase();
   return normalized.length === new Set(normalized).size;
}

//18. Посчитать количество глассных букв в строке
function getCount(str) {

   var vowel_list = 'aeiouAEIOU';
   var vowelsCount = 0;

   for (var x = 0; x < str.length; x++) {
      if (vowel_list.indexOf(str[x]) !== -1) {
         vowelsCount += 1;
      }

   }
   return vowelsCount;
}

//19.
var stringToNumber = function (str) {
   // put your code here
   return parseInt(str);
}

//20.
function opposite(number) {
   return number * (-1);
}

//21.
function square(number) {
   return (number * number);
}

//22.Перевернутые слова
function reverseWords(str) {
   return str.split(" ").reverse().join(" ");
}

//23. Серия для начинающих #1 Школьная работа с документами
function paperwork(n, m) {
   if (n > 0 && m > 0) {
      return n * m;
   }
   return 0;
}

//24. Вдвое старше
const twiceAsOld = (dadYearsOld, sonYearsOld) =>
   Math.abs(sonYearsOld * 2 - dadYearsOld);


//25.Преобразование логического значения в строку
function booleanToString(b) {
   return value = String(b);
}

//26. Вернуть отрицательное число
function makeNegative(num) {
   if (num < 0) {
      return num;
   }
   return num * (-1);
}

//27. умножить
function multiply(a, b) {
   return a * b;
}

//28. Функция 3 - умножение двух чисел
function multiply(a, b) {
   if (!a || !b || typeof (a) != "number" || typeof (b) != "number") {
      return 0;
   }
   return a * b;
}

//29. суммирование от 1 до n
var summation = function (num) {
   let sum = 0;
   for (let i = 1; i <= num; i++) {
      sum += i;
   }
   return sum;
}