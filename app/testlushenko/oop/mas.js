"use strict";
var man = {
    "name": "Tolik",
    "age": "26",
    "id": "15",
    "sex": "M",
    "year": function () {
        return 2019 - parseInt(man.age);
    },
    "mas": [1, 2, 5, 7],
    "sum1": function () {
        var sum = 0;
        for (var key in man.mas) {
            sum += +man.mas[key];
        }
        return sum;
    }
};
var out = document.getElementById("out");
//
// for (let key in man) {
//     out.innerHTML += (key + " " + man[key] + "<br>");
// }
// out.innerText = man.year();
out.innerText = man.sum();
