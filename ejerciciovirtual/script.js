document.querySelector('button').addEventListener('click', calcularImc);

function calcularImc() {
    const peso = parseFloat(document.getElementById('pesoImc').value);
    const altura = parseFloat(document.getElementById('alturaImc').value);
    const resultadoImc = peso / (altura * altura);

let categoria = "";

if (resultadoImc < 18.5) {
    categoria="Bajo peso";
}else if (resultadoImc <25){ //18.5 - 24.9
    categoria="Peso normal";
}else if (resultadoImc <30){  //25 - 29.9
    categoria="Sobrepeso";
}else{
    categoria="Obesidad";  //30 o mas
}


document.getElementById('valorImc').textContent = resultadoImc.toFixed(2);
document.getElementById('categoriaImc').textContent = categoria;
document.getElementById('resultadoImc').style.display = 'block';

}

/* ioperadores ogicos y condicionales
si esl imc es menos a 18.5 la categoria es bajo peso
si el imc es entre 18.5 y 25 la categoria es peso normal
si el imc esta entre 25.1 y 30 la categoria es sobrepeso
si el imc es mayor a 31 la categoria es obesidad */