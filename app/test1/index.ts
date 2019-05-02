import {greeting} from "./greeter";
import {sum} from "./calc";
import {Student} from "./Student";
import doc from './greeter.html'

const numbersToAdd = [3, 4, 10, 2];
const result = sum(numbersToAdd);
console.log(`The result is: ${result}`);

const mhlv = new Student("Anatoliy", "M", "Mik");
doc.body.innerHTML = greeting(mhlv);
console.log(greeting(mhlv));

