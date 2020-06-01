// Cálculo

async function calc () {

    // Variáveis ----------------------------------------------------------
    
        let q = document.getElementById('q-dado').value;
        let m = document.getElementById('m-dado').value;
        let c = document.getElementById('c-dado').value;
        let c2 = document.getElementById('c2-dado').value;
        let t = document.getElementById('t-dado').value;
        let l = document.getElementById('l-dado').value;
        let cal = document.getElementById('cal-dado').value;
        let j = document.getElementById('j-dado').value;

    // Auxiliar -----------------------------------------------------------

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

    // Determinar resultdo ------------------------------------------------

        // Calor sensível ---------------------------------------------------

            if(!(q == "" && m == "" || c == "" && t == "" || m == "" && c == "" || q == "" && t == "" || q == "" && c == "" || m == "" && t == "")) {
                if(q == "") {
                    var answer = m * c * t;
                    document.getElementById('q-cs').value = answer;
                    document.getElementById('q-cs').style.color = "#f00";
                    document.getElementById('q-cs').classList.add('transc');
                    await sleep(200);
                    document.getElementById('q-cs').classList.remove('transc');

                    document.getElementById('m-cs').value = m;
                    document.getElementById('c-cs').value = c;
                    document.getElementById('t-cs').value = t;
                }

                if(m == "") {
                    var answer = (q / c) / t;
                    document.getElementById('m-cs').value = answer;
                    document.getElementById('m-cs').style.color = "#f00";
                    document.getElementById('m-cs').classList.add('transc');
                    await sleep(200);
                    document.getElementById('m-cs').classList.remove('transc');

                    document.getElementById('q-cs').value = q;
                    document.getElementById('c-cs').value = c;
                    document.getElementById('t-cs').value = t;
                }

                if(c == "") {
                    var answer = q / (m * t);
                    document.getElementById('c-cs').value = answer;
                    document.getElementById('c-cs').style.color = "#f00";
                    document.getElementById('c-cs').classList.add('transc');
                    await sleep(200);
                    document.getElementById('c-cs').classList.remove('transc');

                    document.getElementById('q-cs').value = q;
                    document.getElementById('m-cs').value = m;
                    document.getElementById('t-cs').value = t;
                }

                if(t == "") {
                    var answer = (q - m) / c;
                    document.getElementById('t-cs').value = answer;
                    document.getElementById('t-cs').style.color = "#f00";
                    document.getElementById('t-cs').classList.add('transc');
                    await sleep(200);
                    document.getElementById('t-cs').classList.remove('transc');

                    document.getElementById('q-cs').value = q;
                    document.getElementById('m-cs').value = m;
                    document.getElementById('c-cs').value = c;
                }
            }

        // Capacidade Térmica ----------------------------------------------

            // Parte 1

            if(!(c == "" && c2 == "" || c == "" && m == "" || c2 == "" && m == "")) {
                if(c == "") {
                    var answer = c2 / m;
                    document.getElementById('c-ct').value = answer;
                    document.getElementById('c-ct').style.color = "#f00";
                    document.getElementById('c-ct').classList.add('transc');
                    await sleep(200);
                    document.getElementById('c-ct').classList.remove('transc');

                    document.getElementById('c2-ct').value = c2;
                    document.getElementById('m-ct').value = m;
                }

                if(c2 == "") {
                    var answer = c * m;
                    document.getElementById('c2-ct').value = answer;
                    document.getElementById('c2-ct').style.color = "#f00";
                    document.getElementById('c2-ct').classList.add('transc');
                    await sleep(200);
                    document.getElementById('c2-ct').classList.remove('transc');

                    document.getElementById('c-ct').value = c;
                    document.getElementById('m-ct').value = m;
                }

                if(m == "") {
                    var answer = c2 / c;
                    document.getElementById('m-ct').value = answer;
                    document.getElementById('m-ct').style.color = "#f00";
                    document.getElementById('m-ct').classList.add('transc');
                    await sleep(200);
                    document.getElementById('m-ct').classList.remove('transc');

                    document.getElementById('c-ct').value = c;
                    document.getElementById('c2-ct').value = c2;
                }
            }

            //Parte 2

            if(!(c2 == "" && q == "" || c2 == "" && t == "" || q == "" && t == "")) {
                if(c2 == "") {
                    var answer = q / t;
                    document.getElementById('c2-ct2').value = answer;
                    document.getElementById('c2-ct2').style.color = "#f00";
                    document.getElementById('c2-ct2').classList.add('transc');
                    await sleep(200);
                    document.getElementById('c2-ct2').classList.remove('transc');

                    document.getElementById('q-ct').value = q;
                    document.getElementById('t-ct').value = t;
                }

                if(q == "") {
                    var answer = c2 * t;
                    document.getElementById('q-ct').value = answer;
                    document.getElementById('q-ct').style.color = "#f00";
                    document.getElementById('q-ct').classList.add('transc');
                    await sleep(200);
                    document.getElementById('q-ct').classList.remove('transc');

                    document.getElementById('c2-ct2').value = c2;
                    document.getElementById('t-ct').value = t;
                }

                if(t == "") {
                    var answer = q / c2;
                    document.getElementById('t-ct').value = answer;
                    document.getElementById('t-ct').style.color = "#f00";
                    document.getElementById('t-ct').classList.add('transc');
                    await sleep(200);
                    document.getElementById('t-ct').classList.remove('transc');

                    document.getElementById('q-ct').value = q;
                    document.getElementById('c2-ct2').value = c2;
                }
            }
            
        // Calor Latente ---------------------------------------------------

            if(!(q == "" && m == "" || q == "" && l == "" || m == "" && l == "")) {
                if(q == "") {
                    var answer = m * l;
                    document.getElementById('q-cl').value = answer;
                    document.getElementById('q-cl').style.color = "#f00";
                    document.getElementById('q-cl').classList.add('transc');
                    await sleep(200);
                    document.getElementById('q-cl').classList.remove('transc');

                    document.getElementById('m-cl').value = m;
                    document.getElementById('l-cl').value = l;
                }

                if(m == "") {
                    var answer = q / l;
                    document.getElementById('m-cl').value = answer;
                    document.getElementById('m-cl').style.color = "#f00";
                    document.getElementById('m-cl').classList.add('transc');
                    await sleep(200);
                    document.getElementById('m-cl').classList.remove('transc');

                    document.getElementById('q-cl').value = q;
                    document.getElementById('l-cl').value = l;
                }

                if(l == "") {
                    var answer = q / m;
                    document.getElementById('l-cl').value = answer;
                    document.getElementById('l-cl').style.color = "#f00";
                    document.getElementById('l-cl').classList.add('transc');
                    await sleep(200);
                    document.getElementById('l-cl').classList.remove('transc');

                    document.getElementById('q-cl').value = q;
                    document.getElementById('m-cl').value = m;
                }
                
            }

        // Potência --------------------------------------------------------

            if(!(cal == "" && j == "")) {
                if(cal == "") {
                    var answer = j / 4.2;
                    document.getElementById('cal').value = answer;
                    document.getElementById('cal').style.color = "#f00";
                    document.getElementById('cal').classList.add('transc');
                    await sleep(200);
                    document.getElementById('cal').classList.remove('transc');

                    document.getElementById('j').value = j;
                }

                if(j == "") {
                    var answer = cal * 4.2;
                    document.getElementById('j').value = answer;
                    document.getElementById('j').style.color = "#f00";
                    document.getElementById('j').classList.add('transc');
                    await sleep(200);
                    document.getElementById('j').classList.remove('transc');

                    document.getElementById('cal').value = cal;
                }
            }
}

function reset(){
    var inputArray = document.querySelectorAll('input');
    inputArray.forEach(function (input){
        input.value = "";
})
    document.getElementById('input-potencia').value = "4.2"
}