function SomenteNumero(e){
    var tecla=(window.event)?event.keyCode:e.which;   
    if((tecla>47 && tecla<58)) return true;
    else{
    	if (tecla==10 || tecla==0) return true;
	else  return false;
    }
}

function calcular(){    
    var valor1 = document.getElementById("valor1GQ").value 
    var v1 = Number.parseFloat(valor1) * 2;   
    var v2 = (35 - v1)/3;    
    if(v2 >=3){
        res.innerText=`Você precisa de ${v2.toFixed(1)} pontos para passar direto`
    }else if(v2 >= 7){
        res.innerText=`Você precisa de ${v2.toFixed(1)} pontos para passar direto`
    }else{
        res.innerText=``
    }
}




