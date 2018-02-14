var SecPacientes = document.querySelector("#secPacientes");
var SecAddPacientes = document.querySelector("#secAddPacientes");
var btnAdd = document.querySelector("#add-paciente");
var btnVoltar = document.querySelector("#voltar");

ExibirSecPacientes();

btnAdd.addEventListener("click", function(ev){
    ev.preventDefault();    
    ExibirSecAddPacientes();
});

btnVoltar.addEventListener("click", function(ev){
    ev.preventDefault();    
    ExibirSecPacientes();
});

function ExibirSecPacientes (){
    SecPacientes.classList.remove("invisivel");
    SecAddPacientes.classList.add("invisivel");
}

function ExibirSecAddPacientes (){
    SecPacientes.classList.add("invisivel");
    SecAddPacientes.classList.remove("invisivel");
}