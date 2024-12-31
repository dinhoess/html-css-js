(function () {
    //--- Pavimento
    
    function criarTerreo(){
        const janela = document.createElement('div')
        janela.classList.add('janela')
    
        const terreo = document.createElement('div')
        terreo.classList.add('terreo')

        terreo.setAttribute('andar','t')
        terreo.appendChild(janela)
        return terreo
    }

    function criarAndar(numero){
        const porta = document.createElement('div')
        porta.classList.add('porta')

        const andar = document.createElement('div')
        andar.classList.add('andar')
        andar.setAttribute('andar', numero)

        andar.appendChild(porta)
        return andar
    }

    function criarPavientos(){
        const elementosComAndares = document.querySelectorAll('[andares]')
        elementosComAndares.forEach(el => {
            
            const qtd = +el.getAttribute('andares')
    
            for (let i = qtd; i > 0; i--){           
                el.appendChild(criarAndar(i))
            }
    
            el.appendChild(criarTerreo())
            
        })
    }

    criarPavientos()

    //--- Elevador

    function iniciarMovimentacao(){
        const elevador = document.querySelector('.elevador')
        elevador.setAttribute('em-movimentacao','')
    }

    function finalizarMovimentacao(){
        const elevador = document.querySelector('.elevador')
        elevador.removeAttribute('em-movimentacao')
    }  
    
    function emMovimentacao(){
        const elevador = document.querySelector('.elevador')
       return  elevador.hasAttribute('em-movimentacao')
    }
    
    function obterTamanhoElevador(){
        const terreo = document.querySelector('[andar="t"]')
        return terreo.offsetHeight;
    }

    function criarElevador(){
       const poco = document.querySelector('.poco')

       const elevador = document.createElement('div')
       elevador.classList.add('elevador')
       elevador.style.height = obterTamanhoElevador()

       poco.appendChild(elevador)
    }

    function obterPosicaoElevador(){
        const elevador = document.querySelector('.elevador')
        //return elevador.style.bottom
        //console.log(elevador.style.bottom.replace('px',''))
        //elevador.style.bottom.replace(/\d/g,'') expressão regular para eliminar número
        return +elevador.style.bottom.replace(/\D/g,'') // expressão regular para eliminar LETRAS da STRING
    }
    
    function atualizarMostrador(texto){
         const mostrador = document.querySelector('.mostrador')
         mostrador.innerHTML = texto
         
    }

    function iniciarComando(comando){
        const botao = document.querySelector(`[comando="${comando}"]`)
        botao.classList.add('destaque')
    }

    function finalizarComando(comando){
        const botao = document.querySelector(`[comando="${comando}"]`)
        botao.classList.remove('destaque')
    }

    function moverElevadorPara(andar){
        if (emMovimentacao()) return

        iniciarMovimentacao()
        iniciarComando(andar)

        const numero = andar === 't' ? 0 : +andar
        const elevador = document.querySelector('.elevador')

        const posicaoInicial = obterPosicaoElevador()
        const PosicaoFinal = numero * obterTamanhoElevador()
        const subindo = PosicaoFinal > posicaoInicial

        //elevador.style.bottom =(numero * obterTamanhoElevador())

        atualizarMostrador(subindo ? 'Subindo' : 'Descendo')  

        let temporizador = setInterval( () =>{
            const novaPosicao = obterPosicaoElevador() + (subindo ? 10 : -10)
            const terminou = subindo ? novaPosicao >= PosicaoFinal : novaPosicao <= PosicaoFinal
            elevador.style.bottom = terminou ? PosicaoFinal : novaPosicao

            if(terminou){
                clearInterval(temporizador)
                atualizarMostrador(andar === 't'? 'Térreo':`Andar - ${andar}`) 
                finalizarMovimentacao()
                finalizarComando(andar)
            }

        },30 )
    }


    function aplicarControles(){
        const botoes = document.querySelectorAll('[comando]')
        botoes.forEach(botao => {
            const destino = botao.getAttribute('comando')
            botao.onclick = function(){
                moverElevadorPara(destino)
            }
            
        })    

    }

    criarElevador()

    aplicarControles()  

   
 
}
)()