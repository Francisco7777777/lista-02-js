
let m = parseInt(prompt('Digite um número inteiro positivo m.'));
let impar = 1;

for(let i = 1; i <= m; i++) {

    console.log(`${i}³`);
    
    for(let j = 0; j < i; j++) {
        impar = impar + 2;
        console.log(impar);
    }

}
