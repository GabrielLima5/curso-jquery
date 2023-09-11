$(document).ready(function(){

    // adiciona um elemento para dentro de outro, no fim dele
    $('.menu ul').append('<li><a href="#">Append</a></li>')

    // adiciona um elemento para dentro de outro, no fim dele
    // a diferença para o anterior é apenas na sintaxe
    $('<li><a href="#">AppendTo</a></li>').appendTo($('.menu ul'))

    // adiciona um elemento para dentro de outro, no começo dele
    $('.menu ul').prepend('<li><a href="#">Prepend</a></li>')

    // adiciona um elemento para dentro de outro, no comeSo dele
    // a diferença para o anterior é apenas na sintaxe
    $('<li><a href="#">PrependTo</a></li>').prependTo($('.menu ul'))

    // adiciona um elemento DEPOIS de outro
    $('.paragrafo').after('<h2>Hcode Treinamentos (After)</h2>')

    // adiciona um elemento DEPOIS de outro
    // a diferença está apenas na sintaxe
    $('<h2>Hcode Treinamentos (insertAfter)</h2>').insertAfter('.paragrafo')

    // adiciona um elemento ANTES de outro
    $('.paragrafo').before('<h2>Introdução (before)</h2>')

    // adiciona um elemento ANTES de outro
    // a diferença está apenas na sintaxe
    $('<h2>Introdução (insertBefore)</h2>').insertBefore($('.paragrafo'))

    // envolve um elemento para dentro de outro
    $('.cars_list li').wrap('<i></i>')
    $('.cars_list li').wrap('<b></b>')

    // envolve um elemento para dentro de outro, mas apenas em volta de seu conteúdo
    $('.cars_list li').wrapInner('<u></u>')
});