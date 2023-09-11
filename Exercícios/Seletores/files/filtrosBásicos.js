$(document).ready(function(){
    $('.cars-list li:last').css('background-color', 'black') // selecionando o último elemento
    $('.cars-list li:first').css('background-color', 'purple') // selecionando o primeiro elemento
    $('.cars-list li:even').css('background-color', '#ccc') // selecionando elementos de maneira alternada, começando pelos ímpares
    $('.cars-list li:odd').css('background-color', 'blue') // selecionando elementos de maneira alternada, começando pelos pares
    $('.cars-list li:eq(0)').css('font-size', '3rem') // selecionando um elemento por uma posição específica
    $('.cars-list li:gt(2)').css('opacity', '0.3') // selecionando elementos a partir de determinada posição
    $('.cars-list li:lt(2)').css('opacity', '0.5') // selecionando elementos que estejam antes de determinada posição
})