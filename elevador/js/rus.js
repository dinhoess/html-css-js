(function(){
function criarFaixas(){
    const elementosComFaixa = document.querySelectorAll('[faixas]')
    elementosComFaixa.forEach(elemento => {
        const qtde = +elemento.getAttribute('faixas')
    
        for (let i = 0; i < qtde; i++){
            const faixa = document.createElement('div')
            faixa.classList.add('faixa')
            elemento.appendChild(faixa)
        }    
    })    
}

criarFaixas()
})()