$(document).ready(function(e){
    $('#books_list tbody td').on('click contextmenu', e => {
        
        if (e.type === 'contextmenu') e.preventDefault()

        $('#books_list tbody td').css({
            backgroundColor: 'initial',
            color: 'initial'
        })

        $(e.target).css({
            backgroundColor: 'black',
            color: 'white'
        })
    })
})