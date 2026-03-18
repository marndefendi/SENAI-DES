//1
function reajustar(){
    let salario  = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');
    let bonus = 0;

    if(salario > 2000){
        bonus = salario * ( 10 / 100);
    }


    let salarioFinal = salario + bonus;

    resultado.innerHTML = 
    `Bonus de R$ ${bonus.toFixed(2)} <br>salario Final R$ ${
        salarioFinal.toFixed(2)}`;
}
document.getElementById('salario').addEventListener("keypress", function(event){
    if (event.key == "enter"){
        reajustar();
    }
});


//2
function reajustar(){
    let compra  = Number(document.getElementById('compra').value);
    let resultado = document.getElementById('resultado');
    let frete = 0;

    if(compra < 150){
        frete = 20;
    }


    let compraFinal = compra + frete;


    resultado.innerHTML = 
    `Frete de R$ ${frete.toFixed(2)} <br>compra Final R$ ${
        compraFinal.toFixed(2)}`;
}
document.getElementById('compra').addEventListener("keypress", function(event){
    if (event.key == "enter"){
        reajustar();
    }
});


//3
function reajustar(){
    let total  = Number(document.getElementById('total').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if(total > 200){
        desconto = total * ( 5/100);
    }


    let totalFinal = total - desconto;


    resultado.innerHTML = 
    `Desconto de R$ ${desconto.toFixed(2)} <br>total Final R$ ${
        totalFinal.toFixed(2)}`;
}
document.getElementById('total').addEventListener("keypress", function(event){
    if (event.key == "enter"){
        reajustar();
    }
});


//4
function reajustar(){
    let conta  = Number(document.getElementById('conta').value);
    let resultado = document.getElementById('resultado');
    let taxa = 0;

    if(conta > 100){
        taxa = conta * ( 10 /100);
    }


    let contaFinal = conta - taxa;


    resultado.innerHTML = 
    `Taxa de R$ ${taxa.toFixed(2)} <br>conta Final R$ ${
        contaFinal.toFixed(2)}`;
}
document.getElementById('conta').addEventListener("keypress", function(event){
    if (event.key == "enter"){
        reajustar();
    }
});


//5
function reajustar(){
    let mensalidade  = Number(document.getElementById('mensalidade').value);
    let diasatraso  = Number(document.getElementById('diasatraso').value);
    let resultado = document.getElementById('resultado');
    let multa = 0;

    if(diasatraso > 0){
        multa = mensalidade * ( 2 /100);
    }


    let mensalidadeFinal = mensalidade + multa;


    resultado.innerHTML = 
    `multa de R$ ${multa.toFixed(2)} <br>mensalidade Final R$ ${
        mensalidadeFinal.toFixed(2)}`;
}
document.getElementById('mensalidade').addEventListener("keypress", function(event){
    if (event.key == "enter"){
        reajustar();
    }
});


//6




