$(document).ready(function(){
    // retorna ou define o conteúdo HTML de um elemento
    $('header .menu li:eq(1)').html()
    $('header .menu li:eq(1)').html('<a href="index.html">Casa</a>')

    // retorna ou define o conteúdo textual de um elemento
    $('header .menu li:eq(2)').text()
    $('header .menu li:eq(2) a').text('Sobre a gente')

    // substituindo um elemento por outro
    $('#register button').replaceWith('<h4 style="color: red; text-align: center">Vai se registrar não?</h4>')

    // substitui um elemento por outro
    // a mudança está apenas na sintaxe
    $('<h4 style="color: red; text-align: center">Se registra nunk</h4>').replaceAll('#register [type="button"]')
})