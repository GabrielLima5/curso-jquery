$(document).ready(function(){
    $('h1').on('dblclick', e => {
        $(e.target).text('Hcode Treinamentos - jQuery')
    })

    // disparando um evento manualmente
    $('h1').trigger('dblclick')

    $('#form_login').on('submit', e => {
        e.preventDefault()
        console.log('Form values: ', $('#form_login').serializeArray())
    })

    $('#form_login [name=bio]').on('blur', e => {
        $(e.target.form).trigger('submit')
    })
})