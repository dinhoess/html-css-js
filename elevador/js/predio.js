(function () {
    //--- Pavimento
    
    function criarTerreo(){
        const janela = document.createElement('div')
        janela.classList.add('janela')
    
        const terreo = document.createElement('div')
        terreo.classList.add('terreo')

        terreo.appendChild(janela)
        return terreo
    }

    function criarAndar(){
        const porta = document.createElement('div')
        porta.classList.add('porta')

        const andar = document.createElement('div')
        andar.classList.add('andar')

        andar.appendChild(porta)
        return andar
    }

    function criarPavientos(){
        const elementosComAndares = document.querySelectorAll('[andares]')
        elementosComAndares.forEach(el => {
            
            const qtd = +el.getAttribute('andares')
    
            for (let i = 0; i < qtd; i++){           
                el.appendChild(criarAndar())
            }
    
            el.appendChild(criarTerreo())
            
        })
    }
    
    criarPavientos()

    //--- Elevador
}
)()