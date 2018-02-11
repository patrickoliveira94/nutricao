var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
  paciente = pacientes[i];

  var nome = paciente.querySelector(".info-nome").textContent;
  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;
  var imc = paciente.querySelector(".info-imc");

  var flag_peso = validaPeso(peso);
  var flag_altura = true;

  if (!flag_peso){
    flag_peso = false;
    imc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
  }

  if (!flag_altura){
    flag_altura = false;
    imc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }

  if (flag_peso && flag_altura){
    var calc_imc = calculaImc(peso, altura);
    imc.textContent = calc_imc;
  }
  else {
    if (flag_peso == false && flag_altura == false){
        imc.textContent = "IMC inválido";
        paciente.classList.add("paciente-invalido");
    }    
  }
}

function validaPeso(peso){
  if(peso > 0 && peso <= 1000){
    return true;    
  } else {
    return false;
  }
}

function validaAltura(altura){
  if(altura > 0 && altura <= 3.0){
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}