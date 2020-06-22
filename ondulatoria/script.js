async function calc () {

    let t = document.getElementById('t-dado').value;
    let f = document.getElementById('f-dado').value;
    let v = document.getElementById('v-dado').value;
    let lambda = document.getElementById('lambda-dado').value;

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Frequencia e periodo

    if(t == "" && f!= "") {
            var answer = 1/f;
            document.getElementById('tfp1').innerHTML = "T";
            document.getElementById('tfp2').innerHTML = "f";
            document.getElementById('tf1').value = answer;
            document.getElementById('tf1').style.color = "#f00";
            document.getElementById('tf1').classList.add('transc');
            await sleep(200);
            document.getElementById('tf1').classList.remove('transc');

            document.getElementById('tf2').value = f;
    }

    if(f == "" && t!= "") {
        var answer = 1/t;
        document.getElementById('tfp1').innerHTML = "f";
        document.getElementById('tfp2').innerHTML = "T";
        document.getElementById('tf1').value = answer;
        document.getElementById('tf1').style.color = "#f00";
        document.getElementById('tf1').classList.add('transc');
        await sleep(200);
        document.getElementById('tf1').classList.remove('transc');

        document.getElementById('tf2').value = t;
    }

    // Velocidade de propagação

    if(!(v == "" && lambda == "" || v == "" && t == "" && f == "" || lambda == "" && t == "" && f == "")) {

        if(f == "" && t!= "") {

            document.getElementById('barraoux').innerHTML = "/";

            if(v == "") {
                var answer = lambda / t;
                document.getElementById('tfp3').innerHTML = "T";
                document.getElementById('v').value = answer;
                document.getElementById('v').style.color = "#f00";
                document.getElementById('v').classList.add('transc');
                await sleep(200);
                document.getElementById('v').classList.remove('transc');
        
                document.getElementById('tf3').value = t;
                document.getElementById('lambda').value = lambda;
            }

            if(lambda == "") {
                var answer = v * t;
                document.getElementById('tfp3').innerHTML = "T";
                document.getElementById('lambda').value = answer;
                document.getElementById('lambda').style.color = "#f00";
                document.getElementById('lambda').classList.add('transc');
                await sleep(200);
                document.getElementById('lambda').classList.remove('transc');
        
                document.getElementById('tf3').value = t;
                document.getElementById('v').value = v;
            }

        }

    }

    if(t == "" && f!= "") {

        document.getElementById('barraoux').innerHTML = "X";
            
        if(v == "") {
            var answer = lambda * f;
            document.getElementById('tfp3').innerHTML = "f";
            document.getElementById('v').value = answer;
            document.getElementById('v').style.color = "#f00";
            document.getElementById('v').classList.add('transc');
            await sleep(200);
            document.getElementById('v').classList.remove('transc');
    
            document.getElementById('tf3').value = f;
            document.getElementById('lambda').value = lambda;
        }

        if(lambda == "") {
            var answer = v / f;
            document.getElementById('tfp3').innerHTML = "f";
            document.getElementById('lambda').value = answer;
            document.getElementById('lambda').style.color = "#f00";
            document.getElementById('lambda').classList.add('transc');
            await sleep(200);
            document.getElementById('lambda').classList.remove('transc');
    
            document.getElementById('tf3').value = f;
            document.getElementById('v').value = v;
        }

    }

    if(f == "" && t == "") {
        var answert = lambda / v;
        var answerf = v / lambda;
        document.getElementById('tfp3').innerHTML = "T";
        document.getElementById('barraoux').innerHTML = "/";
        document.getElementById('tf3').value = answert;
        document.getElementById('tf3').style.color = "#f00";
        document.getElementById('tf3').classList.add('transc');
        await sleep(200);
        document.getElementById('tf3').classList.remove('transc');

        document.getElementById('tf4').value = answerf;
        document.getElementById('hiddenanws').style.display = "flex";
        document.getElementById('ou').style.display = "flex";
        document.getElementById('tf4').style.color = "#f00";
        document.getElementById('tf4').classList.add('transc');
        await sleep(200);
        document.getElementById('tf4').classList.remove('transc');

        document.getElementById('lambda').value = lambda;
        document.getElementById('v').value = v;
    }

}

function reset() {
    var inputArray = document.querySelectorAll('input');
    inputArray.forEach(function (input){
        input.value = "";
})
    document.getElementById('um').value = "1";
    document.getElementById('barraoux').innerHTML = "/ ou X";
    document.getElementById('tfp1').innerHTML = "T ou f";
    document.getElementById('tfp2').innerHTML = "T ou f";
    document.getElementById('tfp3').innerHTML = "T ou f";
    document.getElementById('hiddenanws').style.display = "none";
    document.getElementById('ou').style.display = "none";
}