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

}