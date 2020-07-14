// Regra de Três ------------------------------------

function awns() {

// Variáveis

    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    let c = document.getElementById('num3').value;
    let prop = document.getElementById('check');

// Proporcionalidade

    if(prop.checked == true) {
        var awnser = (a * b) / c; 
    } else {
        var awnser = (b * c) / a;
    }

// Setar resposta

    document.getElementById('res').value = awnser;

}


