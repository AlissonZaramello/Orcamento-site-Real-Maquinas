let btn = document.querySelector('#clique');
let data = document.querySelector('#data');
let hora = document.querySelector('#hora');
let numero_orc = document.querySelector("#num-orc");
let qnt_btn = 1;


function printHora() {
    now = new Date;
    data.innerHTML = "0" + now.getDate() + "/" + "0" + (now.getMonth() + 1) + "/" + now.getFullYear();
    hora.innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
};

function printNum(){
    numero_orc.innerHTML = qnt_btn;
    qnt_btn++;
}


btn.addEventListener('click', printHora);
btn.addEventListener('click', printNum);

