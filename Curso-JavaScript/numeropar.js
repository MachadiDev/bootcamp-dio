function returnEvenValues(array){
    let evenNums = [ ]
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        }
    }
    console.log(evenNums);
}

let array = [1,2,4,6,3,9,11,12,65];

returnEvenValues(array);