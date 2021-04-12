var ganhoSem = 0;
var ganhoCom = 0;

function adicionarEmail(){
    var email = inputEmailNoticias.value;
    if (email != "" && email.indexOf("@") > -1 && email.indexOf(".com") > -1) {
      alert(`Obrigado pela preferência`);
    }else{
      alert(`Preencha um email válido`);
    }    
}

function mostrarCalculo(){
    if (Number(inputMetros2.value) < 0 || Number(inputMetros2.value) == "" || inputMetros2.value == null || isNaN(inputMetros2.value)) {
        alert("Digite os valores válidos");
    }else if(Number(inputMudasPorM2.value) < 0 || Number(inputMudasPorM2.value) == "" || inputMudasPorM2.value == null || isNaN(inputMudasPorM2.value)){
        alert("Digite os valores válidos");
    }else{
        camposSimulador.style.display = 'none';
        resultadoSimulador.style.display = 'block';
        calcularLucro();
    }
    
}

function esconderCalculo(){
    camposSimulador.style.display = 'block';
    resultadoSimulador.style.display = 'none';
}

function calcularLucro(){
    var metros = Number(inputMetros2.value);
    var mudas = Number(inputMudasPorM2.value);
    var qtdMudas = metros * mudas;
    var gramasMorango = qtdMudas * 800;
    var kgMorango= gramasMorango / 1000;
    var ganhoSem = kgMorango * 10;
    var lucro = ganhoSem * 0.6;
    var ganhoCom = ganhoSem + lucro;
    var dados = [ganhoSem, ganhoCom];

    // Card 1
    uEstufaM.innerHTML = metros;
    uMorangoM.innerHTML = mudas;

    // Card 2
    uEstufaM2.innerHTML = metros;
    uMorangoM2.innerHTML = mudas;
    bQtdMudas.innerHTML = qtdMudas;

    // Card 3
    bGramas.innerHTML = gramasMorango;
    bKg.innerHTML = kgMorango;

    // Card 4
    spanKgMorango.innerHTML = kgMorango;
    bGanhoSem.innerHTML = ganhoSem.toFixed(2);

    // Card 7
    labelGanhoSem.innerHTML = ganhoSem.toFixed(2);
    labelLucro.innerHTML = lucro.toFixed(2);

    // Card 8
    labelGanhoSem2.innerHTML = ganhoSem.toFixed(2);
    labelLucro2.innerHTML = lucro.toFixed(2);
    labelGanhoCom.innerHTML = ganhoCom.toFixed(2);

    // Gráfico

    const labels = ["Sem a StrongBerry", "Com a StrongBerry"];
    const data = {
    labels: labels,
    datasets: [
        {
            label: "Gráfico lucro",
            backgroundColor: ["brown", "#10341c"],
            borderColor: "rgb(255, 99, 132)",
            data: dados,
        },
    ],
    };

    const config = {
    type: "bar",
    data,
    options: {maintainAspectRatio: false},
    };

    var graficoLucro = new Chart(document.getElementById("graficoLucro"), config);
    
}

/* ---------------------------------------------------------------------- */
                    // INÍCIO DA LÓGICA DE ALERTAS NO **LOGIN**
/* ---------------------------------------------------------------------- */

function verificar_login() {
    var email = id_email.value;
    var senha = id_senha.value;

    if (email == "") { // CAMPO DE E-MAIL VAZIO
        alert("Insira algum e-mail !")
    }

    else if (email.indexOf("@") < 0) {  // E-MAIL NÃO TEM ARROBA
        alert("E-mail inválido: Não possui @");
    }

    else if (email.indexOf(".com.br") < 0) { //E-MAIL NÃO POSSUI A FRASE (.com.br)
        alert("E-mail inválido: Não possui (.com.br)");
    }

    else if (email.length < 15) { //E-MAIL CURTO COM MENOS DE 15 CARACTERES
        alert("E-mail muito curto !");
    }

    else if (senha == "") { // CAMPO DE SENHA VAZIO
        alert('Insira alguma senha !')
    }

    else if(senha.length < 8) { //SENHA CURTA COM MENOS DE 8 CARACTERES
        alert("A senha deve conter no mínimo 8 caracteres !")
    }

    else if (senha.indexOf("@") < 0 && senha.indexOf("!") < 0 && senha.indexOf("#") < 0 ){ // VERIFICACAO DE CARACTERE ESPECIAL NA SENHA
        alert ("Insira algum caractere especial em sua senha, como:  @ ou ! ou #");
    }

    else {
        window.location.href= "dashboard.html"; //REDIRECIONAMENTO PARA A PÁGINA DASHBOARD
    }
}

/* ---------------------------------------------------------------------- */
                    // FIM DA LÓGICA DE ALERTAS NO **LOGIN**
/* ---------------------------------------------------------------------- */