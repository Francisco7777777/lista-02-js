let n = parseInt(prompt('Entre com o numero (> 1) a ser decomposto: '));
let fator = 2;

while (n > 1) {
    let multiplicidade = 0;
    while (n % fator == 0) {
        multiplicidade ++;
        n = n / fator;
    }
    if (multiplicidade != 0) {
        window.alert(`Fator ${fator} multiplicidade ${multiplicidade}.`)
    }
    fator++;
}
