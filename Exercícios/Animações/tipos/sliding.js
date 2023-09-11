$(document).ready(function(){
    // escondendo um elemento com o efeito de sliding para cima
    $('.courses_list .course_item_inner:eq(4)').slideUp(4500)

    // exibindo um elemento com o efeito de sliding para baixo
    $('.courses_list .course_item_inner:eq(4)').slideDown(1000)
    
    $('.btn_toggle_item').on('click', e => {
        $(e.target).prev().slideToggle(1000, function(){
            console.log('sumi, ou apareci, deslizando!!')
        })
    })
});