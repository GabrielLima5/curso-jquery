$(document).ready(function(){
    // oculta o elemento de maneira lenta
    $('.courses_list .course_item_inner:eq(3)').fadeOut(2000)

    // exibe o elemento de maneira lenta
    $('.courses_list .course_item_inner:eq(3)').fadeIn(2000, function (){
        $(this).css('border', '1px solid black')
    })

    // altera a opacidade de um elemento
    $('.courses_list .course_item_inner:eq(4)').fadeTo(2000, 0.3)

    $('.btn_toggle_item').on('click', e => {
        $(e.target).prev().fadeToggle(1000, function(){
            console.log('sumi, ou apareci!')
        })
    })
});