var btnAddPaciente = document.querySelector("#adicionar-paciente");

btnAddPaciente.addEventListener("click", function(ev){
  ev.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var paciente = obtemPacienteForm(form);  

  var erros = validaPaciente(paciente);

  if (erros.length > 0){
    exibeMensagensErro(erros);    
    return;
  }

  addPacienteTabela(paciente);

  form.reset();
  mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
});

// Adiciona paciente na tabela
function addPacienteTabela(paciente){
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

// Mostra mensagens de erro
function exibeMensagensErro(erros){
  var ul = document.querySelector("#mensagens-erro");

  ul.innerHTML = "";

  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

// Recebe o paciente inserido no formulário
function obtemPacienteForm(form) {

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

// Validação de Paciente
function validaPaciente(paciente){

  var erros = [];

  if (paciente.nome.length == 0) erros.push("Informe um nome!");
  
  if (!validaPeso(paciente.peso)) erros.push("O peso é inválido!");
  
  if (!validaAltura(paciente.altura)) erros.push("A altura é inválida!");

  if (paciente.gordura.length == 0) erros.push("Informe a gordura!");

  return erros;
}

// Monta <tr>
function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

// Monta <td>
function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}