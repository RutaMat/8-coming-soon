
import { suma } from  './components/sum.js';

import { multiply } from './components/multiply.js';
// yra ir toks būdas
// (B var)import { multiply as daugyba} from './components/multiply.js';
//reikia zinoti is kur - from ir import -ka. lysti reik i komponentus
//tuomet eiti i 
import {sum,divide } from './components/matematika.js';

const rez1 = sum(8, 5);
const rez4 = divide(8, 5);
//(B var)const rez2 = daugyba(8, 5);

console.log(rez1);
console.log(rez4);
