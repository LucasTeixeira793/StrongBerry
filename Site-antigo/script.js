function adicionarEmail(){
    var email = inputEmailNoticias.value;
    if (email != "") {
      alert(`Obrigado pela preferência`);
    }else{
      alert(`Preencha um email válido`);
    }    
}

function calcularLucro(){
    var metros = Number(inputMetros2.value);
    var mudas = Number(inputMudasPorM2.value);

    if (metros == "" || mudas == "" || isNaN(metros) || isNaN(mudas)) {
        alert(`Digite os valores corretamente`);
        resultado.style.display = "none";
    }else{

        var precoKgMorango = 10;
    
        var totalMudas = metros * mudas; //Média de mudas de morango na estufa
        var gramasMorango = totalMudas * 800;
        var kgMorango = (gramasMorango / 1000).toFixed(2);
        var valor = precoKgMorango * kgMorango;
        var lucro = valor * 0.6;

        var porcentagem1 = (valor * 100)/(valor + lucro);
        var porcentagem2 = 100 - porcentagem1;
    
        div1.innerHTML = `<b>Dados digitados:</b><br>
                        Metros de área plantada: <b>${metros}m²</b><br>
                        Média de mudas por metro: <b>${mudas} mudas</b>`;
        
        div2.innerHTML = `Segundo nossas pesquisas cada muda de morango pode gerar até <b>800g</b> de morango durante sua vida, ou seja, sua plantação pode gerar até <b>${gramasMorango}g</b>, ou <b>${kgMorango}kg</b> de morangos<br><br>
        
                        Vimos que a média de preço no kg do morango no estado de São Paulo é de <b>R$10</b>, assim chegando no valor de <span style="text-decoration:underline; color: darkred;"><b>R$${valor}</b></span><br><br>
        
                        Sabendo que um morango orgânico, saudável e em boas condições pode ter uma valorização de até <b>60%</b> no valor, podendo gerar até mais <span style="color:green;text-decoration:underline;"><b>R$${lucro}</b></span><br>
                        O qual somando com o valor que ja iria arrecadar, você ficará com até: <br><br>
                        <span style="color: green; font-size: 35px;text-decoration:underline;"><b>R$${lucro + valor}</b></span>`;

        legenda.innerHTML = `<span style="background-color: red;color: red;">_____</span> Renda normal <span style="background-color:  rgb(0, 128, 0);color:  rgb(0, 128, 0);">_____</span> Lucro a mais com a StrongBerry<br><br>`;

        num1.style.width = `${porcentagem1}%`;
        num1.style.background = "red";
        num1.style.color = "#ffffff";
        num1.innerHTML = `R$${valor.toFixed(2)}`;

        num2.style.width = `${porcentagem2}%`;
        num2.style.background = "rgb(0, 128, 0)";
        num2.style.color = "#ffffff";
        num2.innerHTML = `R$${lucro.toFixed(2)}`;
        
        soma.innerHTML = `<br><br><br>R$${valor.toFixed(2)} + R$${lucro.toFixed(2)} = R$${(lucro + valor).toFixed(2)}`;

        resultado.style.display = "block";
    } // fechamento do else



}