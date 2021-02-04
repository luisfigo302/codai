let nome = "Luís Carlos S N Junior";
var cargo = "Técnico em TI";
var nomehtml = document.getElementById("modifica-nome");
var cargohtml = document.getElementById("modifica-cargo");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocaNomeNoHtml(nome){
    nomehtml.innerHTML = nome; 
}

function trocaCargoHtml(cargo){
    cargohtml.innerHTML = cargo;
}

function logarNome () {
    console.log(nome +" "+"sua biba!!!")
}

function clickInProjetos(){
    console.log("Clicou no botão Projetos!!");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickInSobre(){
    console.log("Clicou no botão Sobre!!!");
    texto1.style.display = "block";
    texto2.style.display ="none";
}

colocaNomeNoHtml(nome);
trocaCargoHtml(cargo);

