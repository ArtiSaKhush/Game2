//событие __.addEventListener('mouseover', () => {})  - *при наведении мышью на элемент*
//событие __.addEventListener('mouseleave', () => {})  - *при покидании мыши этого элемента*
// Деструктуризация(чаще испол-ся в объектах)

// spread оператор - создаёт копию объекта или массива
// ...__ - разворачивает данные у __
// rest оператор - (остаток) - испольсуется в основном с функциями - хранит данные в массиве


let ground = document.querySelector('.ground')
const count = 724; //колво квадратиков
let colors = ['green','orange','red','blue','white']

for(let i = 0; i <= count; i++) {
    let box = document.createElement('div') //создали div квадратиков
    box.classList.add('box') //дали названия для квадратиков(?)
    ground.append(box) // сказали что квадраты должны находиться внутри ground
    
    box.addEventListener('mouseover', () => setColor(box)) 
    box.addEventListener('mouseleave', () => removeColor(box))
}

function setColor(el) {
    el.style.background = colors[randomColor()] // или  /* randomColor() */
}
function removeColor(el) {
    el.style.background = 'gray'
}
function randomColor() {
    return Math.floor(Math.random() * colors.length) 
    /* //или 
    let index = Math.floor(Math.random() * colors.length)
    return colors[index] */
}

// Деструктуризация(чаще испол-ся в объектах)

/* let product = {
    name: 'Молоко',
    params: {
        caracity: '1L',
        fat: '2%',
        model: 'Nestle',
        city: 'Moscow'
    }
}
let { name, params } = product // это деструктруризация
let { caracity: ca, fat, model, city = 'Tashkent' } = product.params
\\               |- сократили название        |- добавили значение по умолчанию 
console.log(name);
console.log(params);
console.log(ca); */

/* let cars = ['bmw', 'mers', 'audi'];
 //console.log(cars[1]);

let [bmw, mers, way] = cars
\\                задаём любое название, первое значение будет всегда равняться первой ячейке и т.д.
console.log(way); */

// spread оператор - создаёт копию объекта
// ...__ - разворачивает данные у __

// - первый пример без spread оператора:
/* let bmw = {
    name: 'bmw',
    year: 2022
}
let malibu = bmw
malibu.name = 'malibu' // - здесь мы поменяли name  у malibu, но он поменялся и у bmw 
console.log(bmw); 
console.log(malibu); */

// - второй пример (объект) с использованием spread оператора:
/* let bmw = {
    name: 'bmw',
    year: 2022
}
let malibu = {
    ...bmw, // - развернули данные bmw
    color: 'black' // - добавили новый ключ
}
malibu.name = 'malibu' // - поменяли name y объекта malibu
console.log(bmw);
console.log(malibu);
 */

// - третий пример (массив) с использованием spread оператора:
/* let array1 = ['html', 'css', 'js']
let array2 = ['vue', 'vuex', 'pinia']
let  newArray  =  [...array1,'git', ...array2]
// \\  взял данные из array1-|    |- добавили ещё одну ячейку git
console.log(newArray);    // =>(7) ['html', 'css', 'js', 'git', 'vue', 'vuex', 'pinia']
console.log(...newArray); // => html css js git vue vuex pinia
console.log(newArray.length); // => 7 */

// rest оператор - (остаток)
/* function solve(a,b, ...rest) {
    console.log(rest);     // => (3) [3, 4, 5] 
    console.log(...rest);  // => 3 4 5 
}
console.log(solve(1,2,3,4,5)); */

/* function solve(...rest) {
    console.log(rest);     // => (12) [1, 2, 3, 4, 5, 423, 23, 978, 2, 32, 3, 87]
}
console.log(solve(1,2,3,4,5,423,23,978,2,32,3,87)); */

// находим сумму чисел:
/* function solve(...rest) {
    let sum = rest.reduce((acc,el) => acc + el)
    return sum
}
console.log(solve(1,2,3,4,5,6)); */