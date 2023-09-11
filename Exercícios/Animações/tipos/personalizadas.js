$(document).ready(function(){
    // criando animações personalizadas
    $('h1').animate({
        fontSize: '50px'
    }, 2000)

    $('h4').on('click', e => {
        $(e.target).animate({
            wordSpacing: '+=5px'
        })
    });

    $('.course_item').on('click', e => {
        $(e.target).animate({
            padding: '+=20px'
        }, 1500)
    })

    $('footer p').on('click', e => {
        $(e.target).animate({
            letterSpacing: '10px'
        }, 2000, function(){
            alert('Aumentou o espaçamento das letras!')
        })
    })
});