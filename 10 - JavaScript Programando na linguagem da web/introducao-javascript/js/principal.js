
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";



var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes.length);

for(var i = 0; i < pacientes.length; i++){
 var paciente= pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var alturaValida = true;
var pesoValido = true;


if (peso <= 0 || peso >= 500){
  console.log("peso inválido!");
  pesoValido = false;
  tdImc.textContent = "Peso Inválido!";
  paciente.classList.add("pacienteinvalido");

}

if (altura <= 0 || altura >= 3.00){
  console.log("Altura Invalida!");
  alturaValida = false;
  tdImc.textContent = "Altura Inválida!"
  paciente.classList.add("pacienteinvalido");
}


if (pesoValido && alturaValida){
  var imc =  peso / (altura * altura);
  console.log(imc);
  tdImc.textContent = imc.toFixed(2);
}



}



