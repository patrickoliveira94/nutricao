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
    imc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3){
    flag_altura = false;
    imc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }

  if (flag_peso && flag_altura){
    var calc_imc = peso / (altura * altura);
    imc.textContent = calc_imc.toFixed(2);
  }
  else {
    if (flag_peso == false && flag_altura == false){
        imc.textContent = "IMC inválido";
        paciente.classList.add("paciente-invalido");
    }    
  }
}

titulo.addEventListener("click", function(){
  mostraMensagem(2);
});

function mostraMensagem(tipo){
  if (tipo == 1){
    console.log("Sistema de nutrição!");
  }  

  if (tipo == 2){
    console.log("Sistema para nutricionista!");
  }    
}

var btnAddPaciente = document.querySelector("#adicionar-paciente");

btnAddPaciente.addEventListener("click", function(ev){
  ev.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var pacienteTr = document.createElement("tr");
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

});