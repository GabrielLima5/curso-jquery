$(document).ready(function(){
    $(':checkbox').length

    // retorna ou define uma propriedade
    // propriedade nativa:
    $(':checkbox').prop('checked', true)
    $(':checkbox').prop('checked')

    // propriedade criada:
    $('h1').prop('nome', 'titulo')
    $('h1').prop('nome')

    // remove uma propriedade
    // propriedade nativa
    $(':checkbox').prop('checked', false)

    // propriedade criada
    $('h1').removeProp('nome')
});