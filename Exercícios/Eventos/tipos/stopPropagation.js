$(document).ready(function(){
    $('#form_login').on('change', '[name]', e => {
        alert('O elemento mudou! Seu valor: ' + $(e.target).val())
    })

    $('#form_login [name=bio]').on('change', e => {
        e.stopPropagation()
        $(e.target).css('background', 'red')
    })

    // agora, quando o campo de Biografia tiver seu valor alterado
    // nenhum outro elemento ficará sabendo, e o alert() não será invocado.
})