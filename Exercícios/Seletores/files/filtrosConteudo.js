$(document).ready(function(){
    // selecionando um elemento pelo seu conteúdo
    $('menu li a:contains(About)').css('outline', 'solid red 2px')
    
    // selecionando um elemento que não possui conteúdo
    $('.cars-list li:empty').text('Vazio').css({
        'background': 'red',
        'color': 'white'
    })

    // Selecionando os elementos que possuem conteúdo
    $('.cars-list li:parent').append('<span style="color: green">Tem valor</span>')

    // Seleciona os elementos que possuem determinada tag dentro deles
    $('.cars-list li:has(span)').animate({
        fontSize: '30px',
        opacity: 0.7
    }, 2000)
})