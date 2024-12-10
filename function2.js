function calculaPrecoFinal(produto, preco, aliquota) {
    const precoComImposto = preco + (preco * (aliquota / 100));
    return { produto, precoComImposto };
}

const prompt = require("prompt-sync")();
let produto = prompt("Digite o produto: ");
let preco = Number(prompt("Digite o preco: "));
let imposto = Number(prompt("Digite o imposto: "));

let precofinal = calculaPrecoFinal(produto, preco, imposto);
console.log(precofinal.precoComImposto);
console.log(`O preço final do produto ${precofinal.produto} já com imposto é de R$ ${precofinal.precoComImposto.toFixed(2)}`);
