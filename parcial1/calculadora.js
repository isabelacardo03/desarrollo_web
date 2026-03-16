document.querySelector('button').addEventListener('click', calcular);

function calcular() {
    const edad = parseFloat(document.getElementById('edad').value);
    const presion = parseFloat(document.getElementById('presion').value);
    const colesterol = parseFloat(document.getElementById('colesterol').value);
    let fumador = document.getElementById('fumador').value;
}

let clasificacion = "";

let punto = 0;

if (edad == 35 && edad < 44) {
    punto += 1
} else if (edad > 45) {
    punto += 2
}

if (presion >= 120) {
    punto += 1;
} else if (presion >= 140) {
    punto += 3;
}

if(colesterol >= 200){
    punto+1;
}else if(colesterol >= 240){
    punto +=3;
}

if(fumador == "Sí"){
    punto +=3;
}
