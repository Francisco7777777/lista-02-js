let n = parseInt(prompt('Digite o número de n elementos de sequência de números inteiros.'));
let soma = 0;

for (let i = 1; i <= n; i++) {

    let numero = parseInt(prompt(`Entre com o ${i}º número da sequência:`));

    let divisores = 0;

    for(let divisor = 0; divisor <= numero; divisor++) {
        if(numero % divisor === 0) {
            divisores ++
        }
        if(divisores > 2) {
            break;
        }
    }

    if (divisores > 2) {
        window.alert(`O número ${numero} não é primo.`);
    } else {
        window.alert(`O número ${numero} é primo.`);
        soma += numero;
    }
}   

window.alert(`A soma de todos os números primo: ${soma}`);