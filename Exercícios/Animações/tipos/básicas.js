$(document).ready(function(){
    // oculta um elemento 
    // (parâmetros são opcionais e determinam a duração
    // da animação)
    $('.courses_list div:first').hide(5000)
    
    // exibe um elemento
    // (parâmetros são opcionais e determinam a duração
    // da animação)
    $('.courses_list div:first').show(1000)

    // faz alternância para os métodos hide() e show()
    // (parâmetros são opcionais e determinam a duração
    // da animação)
    $('.courses_list .course_item:eq(2)').toggle(1000)

    $('.btn_toggle_item').on('click', e => {
        $(e.target).prev().toggle(500)
    })
});