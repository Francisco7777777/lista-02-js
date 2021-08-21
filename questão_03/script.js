let n = (Number)(prompt('Digite um número inteiro positivo n.'));
let m = (Number)(prompt('Digite um número inteiro positivo m.'));

let valorMax = 0;
let xMax = 0, yMax = 0;

for(let x = 0; x <= n; x++) {
    for(let y = 0; y <= m; y++) {
        
        let valor = x*y - x*2 + y;
        
        if(valor > valorMax) {
            valorMax = valor;
            xMax = x;
            yMax = y;
        }
    }
}

window.alert(`Valor maximo da funcao = ${valorMax} foi alcancado com x = ${xMax} e y = ${yMax}`);