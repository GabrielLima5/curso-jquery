$(document).ready(function(){
    // retorna as coordenadas com a posição do elemento
    // em relação ao documento HTML
    $('form .field:eq(1)').offset()

    // define uma nova posição para o elemento
    $('form .field:eq(1)').offset({
        top: 5,
        left: 100
    })

    // retorna as coordenadas com a posição do elemento
    // em relação ao elemento pai
    $('form .field:eq(1)').position()

    // retorna a posição do scroll vertical
    $(document).scrollTop()

    // define a posição do scroll vertical
    $(document).scrollTop(400)

    // retorna a posição do scroll horizontal
    $(document).scrollLeft()

    // define a posição do scroll horizontal
    $(document).scrollLeft(400)
});