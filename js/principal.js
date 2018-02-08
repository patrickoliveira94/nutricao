var titulo = document.querySelector("#titulo");
titulo.textContent = "Sistema para Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++){
  paciente = pacientes[i];

  var nome = paciente.querySelector(".info-nome").textContent;
  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;
  var imc = paciente.querySelector(".info-imc");

  var flag_peso = true;
  var flag_altura = true;

  if (peso <= 0 || peso >= 1000){
    flag_peso = false;
  }

  if (altura <= 0 || altura >= 3){
    flag_altura = false;
  }

  if (flag_peso && flag_altura){
    var calc_imc = peso / (altura * altura);
    imc.textContent = calc_imc.toFixed(2);
  }
  else {
    imc.textContent = "IMC inválido";
  }
}
