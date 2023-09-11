$(document).ready(function(){
    $('.title').on('click', e => {
        $(e.target).css('outline', '8px solid black')
    })

    // clonando um elemento
    let el = $('.title').clone(true)
    el.appendTo('section main p:last')
})