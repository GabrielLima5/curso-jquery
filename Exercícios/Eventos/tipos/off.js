$(document).ready(function(){
    let entries = 100

    $('.register').append(`<u>- Ainda restam ${100 - entries} vagas!</u>`)
    $('#form_login').on('submit', e => {
        e.preventDefault()
        
        if (entries === 100){
            $('#form_login').off()
        } else {
            alert('Você foi cadastrado!')
        }
    })
})