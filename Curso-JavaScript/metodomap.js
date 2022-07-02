const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
}

const nums = [1,6,12,3,5,7];

console.log('this -> laranja', mapComThis(nums, laranja));

console.log('this -> maçã', mapComThis(nums, maca));

/* Sem utilizar o metodo this*/
function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2;
    })
}

console.log(mapSemThis(nums));