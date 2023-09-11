$(document).ready(function(){
    // quando o input recebe foco
    $('form [name]').focus(function(){
        $(this).css('background-color', 'yellow')
    })

    // quand o input perde o foco
    $('form [name]').blur(function(){
        //alert('Você digitou ' + $(this).val())
    })

    // quando o input receber foco (mesmo que seja um elemento filho)
    $('.form-group').focusin(function(){
        console.log('Você selecionou um campo')
    })

    // quando o input perde o foco, mesmo que seja um elemento filho
    $('.form-group').focusout(function(){
        console.log('você deixou de selecionar o campo')
    })

    // quando o input muda de valor
    $('form [name]').change(function(){
        console.log($(this).val())
    })

    // quando um texto dentro do input é selecionado
    $('form [type=text]').select(function(){
        console.log('Você selecionou o valor desse campo')
    })

    // quando o formulário é enviado
    $('form').submit(function(e){
        e.preventDefault()
        console.log($(this).serializeArray())
    })

    $('#linklogo').click(e => {
        e.preventDefault()
        console.log($(e.target))
    })
}); 