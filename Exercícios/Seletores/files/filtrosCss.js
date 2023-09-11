$(document).ready(function(){
    $('.cars-list li:last').css('text-decoration', 'underline')
    $('.cars-list li:last-child').css('text-decoration', 'underline')
    // A diferença entre os filtros last e last-child, é que last seleciona apenas
    // um único elemento como sendo o último. Já o last-child pode selecionar mais de um elemento
    // como sendo o último.

    $('.cars-list li:first').css('font-size', '25px')
    $('.cars-list li:first-child')
    // A diferença entre os filtros first e first-child, é que first seleciona apenas
    // um único elemento como sendo o primeiro. Já o first-child pode selecionar mais de um elemento
    // como sendo o primeiro, ou seja, pega todos os casos.

    $('.cars-list li:even').css('font-size', '25px')
    $('.cars-list li:nth-child(even)').css('font-size', '15px')
    // seleciona de maneira alternada os elementos ímpares

    $('.cars-list li:odd').css('font-size', '25px')
    $('.cars-list li:nth-child(odd)').css('font-size', '15px')
    // seleciona de maneira alternada os elementos pares

    $('.cars-list li:eq(0)').css('font-size', '25px')
    $('.cars-list li:nth-child(1)').css('font-size', '15px')
    // seleciona um elemento por sua posição específica

    $('.cars-list li:nth-last-child(3)').css('font-weight', 'bold')
    // seleciona alguns elementos, do último para cima
})