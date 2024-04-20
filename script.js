
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
        
        
    }

    
}





