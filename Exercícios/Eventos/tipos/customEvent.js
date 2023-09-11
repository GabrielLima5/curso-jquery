$(document).ready(function(){
    $('header').on('initPage', e => {
        $(e.target).find('h1').append('- Seja bem-vindo!')
        .css({
            color: 'blue',
            left: '100px'
        })

        $(e.target).find('img').animate({
            width: '400px'
        })
    })

    setTimeout(function(){
        $('header').trigger('initPage')
    }, 1500)
})