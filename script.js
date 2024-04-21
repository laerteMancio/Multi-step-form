

  
 
const checkBoxStep3 = ()=>{
    const conteudoCheckBoxPreco = document.getElementsByClassName('conteudo-step-3');
    const checkBoxPreco = document.getElementsByClassName('checkbox-addons');

    
    for (let i=0; i<checkBoxPreco.length; i++) {
        if (checkBoxPreco[i].checked) {
            conteudoCheckBoxPreco[i].style.backgroundColor = 'hsl(217, 100%, 97%)';
            conteudoCheckBoxPreco[i].style.border = '1px solid  hsl(213, 96%, 18%)';

           
          } else {
            conteudoCheckBoxPreco[i].style.backgroundColor = 'hsl(0, 0%, 100%)';
            conteudoCheckBoxPreco[i].style.border = '1px solid hsl(229, 24%, 87%)';
          }
    }
}


  const acionarCheckbox = () =>{
    
    const slider = document.getElementById('controle-slider')
    const posicaoAtual = window.getComputedStyle(slider).justifyContent;
    const elementoMonthly = document.getElementsByClassName('label-monthly');
    const elementoYearly = document.getElementsByClassName('label-yearly');
    const descontoPlanos = document.getElementsByClassName('desconto');
    const precoPlanos = document.getElementsByClassName('preco');
    
    
    

    const monthly = elementoMonthly[0]
    const yearly = elementoYearly[0]

    

    if (posicaoAtual === 'start') {
        slider.style.justifyContent = 'end'        
        yearly.style.color = 'hsl(213, 96%, 18%)';
        monthly.style.color = 'hsl(229, 24%, 87%)';

        descontoPlanos[0].classList.remove('sumir-display')
        descontoPlanos[1].classList.remove('sumir-display')
        descontoPlanos[2].classList.remove('sumir-display')

        precoPlanos[0].innerHTML = '$90/yr'
        precoPlanos[1].innerHTML = '$120/yr'
        precoPlanos[2].innerHTML = '$150/yr'
        precoPlanos[3].innerHTML = '$10/yr'
        precoPlanos[4].innerHTML = '$20/yr'
        precoPlanos[5].innerHTML = '$20/yr'
        
        
    } else if (posicaoAtual === 'end'){
        slider.style.justifyContent = 'start'   
        monthly.style.color = 'hsl(213, 96%, 18%)';
        yearly.style.color = 'hsl(229, 24%, 87%)'; 

        descontoPlanos[0].classList.add('sumir-display')
        descontoPlanos[1].classList.add('sumir-display')
        descontoPlanos[2].classList.add('sumir-display')

        precoPlanos[0].innerHTML = '$9/yr'
        precoPlanos[1].innerHTML = '$12/yr'
        precoPlanos[2].innerHTML = '$15/yr'
        precoPlanos[3].innerHTML = '$1/yr'
        precoPlanos[4].innerHTML = '$2/yr'
        precoPlanos[5].innerHTML = '$2/yr'
        
        
    }

    
}





