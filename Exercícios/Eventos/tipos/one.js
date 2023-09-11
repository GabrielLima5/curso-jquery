$(document).ready(function(){
    $('.books').append('<u> - Marque seus favoritos (Ação não pode ser desfeita)</u>')

    $('#books_list tbody tr').one('click', e => {
        if ($(e.currentTarget).hasClass('trselected')){
            $(e.currentTarget).removeClass('trselected')
        } else {
            $(e.currentTarget).addClass('trselected')
        }
    })
})