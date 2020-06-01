$(document).ready(function() {
    $("#txtTel").mask("(00) 00000-0000")
    $('#txtData').mask('00/00/0000')
});

var clicked = false;
function myFunction() {
    /* var element = document.body;
    element.classList.toggle("dark-mode"); */

        if(!clicked) {
            clicked = true;
            document.getElementById("btnNM").innerHTML = "Desativar Night Mode";
            /* document.querySelector("#btnCancelar").style.color = "white";
            document.querySelector("#btnEnviar").style.backgroundColor = "#262626"; */
        }
        else {
            clicked = false;
            document.getElementById("btnNM").innerHTML = "Ativar Night Mode";
            /* document.querySelector("#btnCancelar").style.color = "#8800ff";
            document.querySelector("#btnEnviar").style.backgroundColor = "#8800ff"; */
        }

 }

window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}