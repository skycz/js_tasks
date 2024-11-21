"use strict";

/* let x = 5; alert(x++); */ // alert - выводит запись только в браузере

/* [] + false - null + true  */
/* console.log(typeof([] + false)); */ // false 
// выведится строковый тип данных

/* console.log([] + false - null); */ // NaN

/* console.log([] + false - null + true); */ // NaN
// Выражение [] + false - null + true в конечном итоге возвращает NaN из-за попытки выполнить арифметическую операцию с некорректным числовым значением (NaN)
// так как любое математическое действие с NaN возвращает NaN

/* let y = 1; */ // y присвается значение 1
/* let x = y = 2; */ // строка начинается справой стороны, 2 присваивается y, y равен x. в итоге двойка становится значением x 
/* alert(x); */ // выводит двойку

/* console.log([] + 1 + 2);*/ // Пустой массив [] при использовании с оператором + преобразуется в пустую строку ""
// результат: "" + "1" даёт строку "1"
// теперь у нас строка "1" и число 2
// Оператор + выполняет конкатенацию строк, если хотя бы один из операндов является строкой
// Результат: "1" + "2" даёт строку "12"

/* alert("1"[0]);  */// "1"[0] означает: "Возьми символ строки "1", который находится на индексе 0"
// код выведет 1

/* console.log(2 && 1 && null && 0 && undefined); */
// выведится null тк оператор &&-И запинается на первой лжи в данном случае на null
// ИЛИ запинается на правде

/* console.log(!!(1 && 2) === (1 && 2)); */
// !! - возвращает булиновое значение, которое не подлежит сравнению

/* alert(null || 2 && 3 || 4); */ // оператор &&-И выведет последнее правдивое значение 3, тк его приоритет выше чем у оператора ||-ИЛИ

/* const a = [1, 2, 3]; */ // a не ровно b, тк это абсолютно два разных хранилища данных, хоть и с индентичными значениями 
/* const b = [1, 2, 3]; */

/* console.log(a == b); */ // false 

/* alert(+"Infinity"); */
// Унарный плюс (+) перед строкой пытается привести значение к числу. после применения унарного плюса, строка "Infinity" становится числом Infinity

/* console.log("Ёжик" > "яблоко"); */
// Строки сравниваются посимвольно, на основе их Unicode-кодов
// Сравнение начинается с первого символа строк. Первый символ "Ёжик" — это "Ё" (код 1025). Первый символ "яблоко" — это "я" (код 1103).
// Итог: яблоко > ежик, тк 1025 < 1103, строка "Ёжик" меньше, чем "яблоко"

/* console.log(0 || "" || 2 || undefined || true || falsе); */
// оператор или запинается на первой правде 2

/* const restorantData = {
    menu: [
        {
        name: "Salad Caesar",
        price: "14$",
        },
        {
        name: "Pizza",
        price: "9$",
        },
        {
        name: "Beefsteak",
        price: "17$",
        },
        {
        name: "Napoleon",
        price: "7",
        },
    ],
    waitors: [
        { name: "Alice", age: 22 },
        { name: "John", age: 24 },
    ],
    averageLunchPrice: "20$",
    openNow: true,
};

function isOpen(prop) {
    let answer = "";
    prop ? (answer = "Открыто") : (answer = "Закрыто");

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (parseInt(fDish.price) + parseInt(sDish.price) < parseInt(average)) {
        return "Цена ниже средней";
    } else {
        return "Цена выше средней";
    }
}

console.log(
    isAverageLunchPriceTrue(
        restorantData.menu[0],
        restorantData.menu[1],
        restorantData.averageLunchPrice
    )
);

function transferWaitors(data) {
    const copy = Object.assign({}, data);
    copy.waitors = [...data.waitors];

    copy.waitors[0] = { name: "Mike", age: 32 };
    return copy;
}
transferWaitors(restorantData); */