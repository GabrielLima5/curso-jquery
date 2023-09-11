$(document).ready(function(){
    // removendo um elemento
    $('.cars_list li:eq(1)').remove()

    // não remove o elemento, mas o deixa vazio
    $('.cars_list li:eq(0)').empty()

    // removendo um elemento, mas mantendo seus eventos
    let txt = $('.paragrafo').detach()
    $('.paragrafo').on('click', e => {
        $(e.target).html('Vc clicou em mim!')
    })
    $('section main p').before(txt)

    // removendo os elementos que estão em volta de outro
    $('.cars_list li').wrap('<i></i>')
    $('.cars_list li').unwrap()
})