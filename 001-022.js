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