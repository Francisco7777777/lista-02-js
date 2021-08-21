
let n = parseInt(prompt('Entre com tamanho da sequecia'));

let mdc = parseInt(prompt('Entre com o 1º número da sequencia: '));

for (let i = 1; i < n; i++) {
    let numero = parseInt(prompt(`Entre com o ${i + 1}º número da sequencia:`));

    while (numero != 0) {
        let resto = mdc % numero;
        mdc = numero;
        numero = resto;
    }
}

window.alert(`MDC = ${mdc}`);
