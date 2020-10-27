let salario = 3002.00;
let calc = salario - 2000.00;

if (salario <=2000.00){
    console.log('Isento');
}else if(salario >= 2000.01 && salario <= 3000.00) {
    var valor1 = calc - 2000;
    var valor2 = calc - 3000;
    var resultFaixa01 = valor1 * 0.08;
    var resultFaixa02 = valor2 * 0.18;
}
console.log(`${typeof resultFaixa01} e ${typeof resultFaixa02}`);
console.log(calc);
console.log(valor1);
console.log(valor2);