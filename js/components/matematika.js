//jeigu viename faile daug logikų. Apie biblioteku kurima. buna tarpine grandis ir tai yra pvz matematika.js. Tuomet sis failas bus tarpininkas importo su main.js

const sum = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

export {
    sum,
    minus,
    multiply,
    divide
}