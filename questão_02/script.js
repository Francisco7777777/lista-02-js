let n = parseInt(prompt('Digite um número inteiro positivo n.'));
let hi, cat01, cat02, achou;

for (hi = 1; hi <= n; hi++) {
    achou = false;

    for (cat01 = 1; cat01 < hi && !achou; cat01++) {
        cat02 = cat01;

        while (cat01 * cat01 + cat02 * cat02 < hi * hi) {
            cat02++
        }

        if (cat01 * cat01 + cat02 * cat02 == hi * hi) {
            window.alert(`hiponetusa ${hi}, cateto 01: ${cat01}, cateto 02: ${cat02}`);
            achou = true;
        }
    }
}