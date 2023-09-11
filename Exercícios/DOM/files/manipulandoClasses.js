$(document).ready(function(){
    // adicionando uma classe
    $('header .menu ul li:last').addClass('style-menu')

    // removendo uma classe
    $('header .menu ul li:last').removeClass('style-menu')

    // alternando uma classe
    $('header .menu ul li a').on('click', e => {
        e.preventDefault()
        $(e.target).toggleClass('style-menu')
    })

    // verificando se o elemento possui uma classe
    $('header .menu ul li a').hasClass('style-menu')

    $('p').each((i, e) => {
        if ($(e).hasClass('paragrafo')){
            $(e).append('<span style="color: red"> Eu tenho a classe </span>')
        }
    })
});