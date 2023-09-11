$(document).ready(function(){
    $('p').on('click', e => {
        $(e.target).toggleClass('underline_section')
    })

    $('p').on('click.colorRed', e => {
        $(e.target).toggleClass('selected_section')
    })

    $('#btn-remove-css-color').on('click', e => {
        e.preventDefault()
        $('p').off('click.colorRed')
    })
})