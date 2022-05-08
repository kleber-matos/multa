function calcular(){
    
    var velo = window.document.querySelector('#vel')
    var res = window.document.querySelector('#res')
    var vel = Number(velo.value)
    
    res.innerHTML =`Sua velocidade foi de ${vel} k/h, use sempre cinto de segurança`


    // se passar dos 30
    if (vel >=30){
        res.innerHTML =`Você ganhou uma multa, sua velocidade foi de ${vel} k/h. Use sempre cinto de segurança`
    }

    
    //recarregar pagina
    var re = window.document.querySelector('#apagar')
    re.addEventListener("click" , function(){
        location.reload();
    });
   
} 