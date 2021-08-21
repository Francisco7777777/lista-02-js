
let soma01 = 0;
let soma02 = 0;

do {

    var n = parseInt(prompt('Digite o número de n elementos da 1º sequência de números inteiros.'));
    
    if (n % 2 == 0) {
        soma01 += n;
    }

} while (n !== 0);

window.alert(`A soma dos números pares da 1º sequência: ${soma01}`);


do {

    var m = parseInt(prompt('Digite o número de m elementos da 2º sequência de números inteiros.'));
    
    if (m % 2 == 0) {
        soma02 += m;
    }

} while (m !== 0);

window.alert(`A soma dos números pares da 2º sequência: ${soma02}`);