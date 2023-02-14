function entrar() {
    var idade = document.getElementById("idade").value;

    if (idade >= 18) {
        alert('Você é maior de idade e pode consumir bebida alcoolica!');
        window.location = "barzinho.html";
    } else {
        alert('Você é menor idade, não pode entrar!');
    }
}

function pedir(){
    document.getElementById("caipirinhaSalvo").innerHTML = caipirinha.value;
    document.getElementById("cachacaSalvo").innerHTML = cachaca.value;
    document.getElementById("cervejaSalvo").innerHTML = cerveja.value;
}

function fechar() {
    var caipirinha = document.getElementById("caipirinha").value;
    var cachaca = document.getElementById("cachaca").value;
    var cerveja = document.getElementById("cerveja").value;

    var total = parseFloat(caipirinha * 30)+parseFloat(cachaca * 20)+ parseFloat(cerveja *10);

    if (total !== 0 ){
        document.getElementById("resultado").style.visibility = "visible";
        document.getElementById("total").innerHTML = total;   
    } else{
        alert("Vai sair sem consumir nada? :(");
    }



}