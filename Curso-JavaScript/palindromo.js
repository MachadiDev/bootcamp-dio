function verificaPalindromo(string) {
    if (!string) return 'Escolha uma palavra';

    if (string.split(" ").reverse().join(" ") === string) {
        return `${string} É um palindromo`;
    } else{
        return "Não é um palindromo";
    }

    

}

console.log(verificaPalindromo("ama"));

//solucao 2

function verificaPalindromo2(string){
    if (!string) return 'Escolha uma palavra';

    for (let i =0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]){
        return false;
        }
    }

    return true;
}

console.log(verificaPalindromo2("socorram me subino onibus em marrocos"));