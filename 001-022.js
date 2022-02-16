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