"use strict"; // - Чтобы перевести код в режим
//полного соответствия современному стандарту, требуется указать специальную директиву use strict


/* 
1. Задать температуру в градусах по Цельсию.
Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, 
где Tf – температура по Фаренгейту, Tc – температура по Цельсию 
*/

const tempCel = prompt('Введите температуру по Цельсию');
const tempFar = (9 / 5) * tCel + 32;

console.log(Math.floor(tempFar));
 
function prompt() {
    return 21;
}



/*
2. Работа с переменными.
a) Объявить две переменные: admin и name. Записать в name строку «Василий»;
b) Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).
*/
/*
let admin;
let name = 'Василий';
admin = name;
console.log(admin);
*/


/*
4. *Чему будет равно JS-выражение 1000 + "108"?
*/
// 1000108 
