function calcular(){   
    var valor1 = document.getElementById("valor1GQ"); 
    var valor2 = document.getElementById("valor2GQ"); 
    var v1 = Number.parseFloat(valor1.value) * 2;
    var v2 = Number.parseFloat(valor2.value) * 3;
    var anual = (v1 + v2)/5;
    var final = 10-anual; 
    
    if(anual >= 3){
        if(anual >= 7){
            res.innerText=`${anual.toFixed(1)} pontos anuais. Parabéns. Aprovado por Média!!`       
        }else{
            res.innerText=`Você precisa de ${final.toFixed(1)} pontos na final para passar!!`
        }  
    }else{
        res.innerText=`${anual.toFixed(1)} pontos anuais. Infelizmente você foi reprovado!!`
    }
        
}