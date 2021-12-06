var salario = document.getElementById('ganho-mes');
var jornada = document.getElementById('horas-dia');

function calcularValorHora(){
    var HorasUteis = jornada.value * 20;
    var valorFinal = (salario.value / HorasUteis).toFixed(2);
    
    resposta.textContent = 'R$ ' + valorFinal;
    
}