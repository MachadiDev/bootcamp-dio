function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const meuArray = [1,2,45,6,3,24,16,8,10,5,9];

console.log(filtraPares(meuArray));