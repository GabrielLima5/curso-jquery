$(document).ready(function(){
    $('p').click(e => {
        // retorna informações gerais sobre o evento
        console.log(e)

        // retorna o tipo de evento executado
        console.log(e.type)  

        // retorna o nome do elemento em que clicamos
        alert(`Você clicou em uma tag <${e.target.localName}>`)
    
        // retorna informações sobre o elemento em que clicamos, e não sobre o elemento em que o evento foi definido
        console.log('currentTarget', e.currentTarget)

        // retorna a posição X e Y do mouse onde ocorreu o evento
        console.log(e.pageX, e.pageY)
    })

    $('[name="bio"]').keydown(e => {
        // retorna o código da tecla pressionada
        console.log(e.keyCode)
        console.log(e.which)

        // retorna o nome da tecla pressionada
        console.log(e.key)

        if (e.key === 'Enter'){
            e.preventDefault()
            alert(`Você pressionou o ${e.key}!`)
        }

        // interrompe a execução padrão do evento
        e.preventDefault()

        // interrompe a propagação/disseminação dos eventos
        e.stopPropagation()
    })
})