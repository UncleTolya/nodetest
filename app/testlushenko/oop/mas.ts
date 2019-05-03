const man: {[key: string]: any} = {
    "name": "Tolik",
    "age": "26",
    "id": "15",
    "sex": "M",
    "year": () => {
       return 2019 - parseInt(man.age);
    },
    "mas": [1, 2, 5, 7],
    "sum1": () => {
        let sum = 0;
        for (const key in man.mas) {
            sum += +man.mas[key];
        }
        return sum;
    }
};

const out: HTMLElement =  document.getElementById("out")!;
//
// for (let key in man) {
//     out.innerHTML += (key + " " + man[key] + "<br>");
// }
// out.innerText = man.year();
out.innerText = man.sum();
