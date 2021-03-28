
import { suma } from  './components/sum.js';

import { multiply } from './components/multiply.js';
// yra ir toks (B var)import { multiply as daugyba} from './components/multiply.js';
//reikia zinoti is kur - from ir import -ka. lysti reik i komponentus
//tuomet eiti i 

const rez1 = suma(8, 5);
const rez2 = multiply(8, 5);
//(B var)const rez2 = daugyba(8, 5);

console.log(rez1);
console.log(rez2);
