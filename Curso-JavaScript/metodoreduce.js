/*function somaNumeros(arr){
    return arr.reduce(function(prev, current) {
        return prev + current;
    })

}
const numbers = [1,2,5,6,7,8,9,4,3,2,4,4,5,6];

console.log(somaNumeros(numbers));
*/
const lista = [{
    nome: 'Sabão em po',
    preco: 10,
},
{
    nome: 'Cereal',
    preco: 20,
},
{
    nome: 'toalha',
    preco: 50,
},

];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev,current,index) {
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));