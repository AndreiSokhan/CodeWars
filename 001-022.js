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
   for (let i = 1; i<=n; i++) newArr.push(i)
   return newArr.reverse()
};
