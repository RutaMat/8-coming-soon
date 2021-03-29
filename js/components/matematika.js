//jeigu viename faile daug logikų. Apie biblioteku kurima. buna tarpine grandis ir tai yra pvz matematika.js. Tuomet sis failas bus tarpininkas importo su main.js

const sum = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const matamatika = {
    sudeti: sum,
    atimti: minus,
    sudauginti: multiply,
    dalinti: divide,

    sum: sum,
    subtract: minus,
    multiply: multiply,
    divide: divide,

    rus1: sum,
    rus2: minus,
    rus3: multiply,
    rus4: divide,
}

export { matamatika }