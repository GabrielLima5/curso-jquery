$(document).ready(function(){
    // selecionando elementos <button> ou inputs do tipo button
    $('#register :button').text()

    // selecionando inputs do tipo checkbox
    $('#register :checkbox').trigger('click')

    // selecionando elementos do tipo radio
    $('[type=radio]').on('change', e => {
        let value = $('input:checked').val()
        let gender = value === 'M' ? 'Masculino' : 'Femenino'
        alert(`Você selecionou o sexo ${gender}`)
    })

    // seleciona todos os inputs desabilitados
    $('#register :disabled').val('anthonyrafael@gmail.com').prop('disabled', false)
    
    // seleciona apenas inputs que estão em foco
    $('input').on('focus', e => {
        $('input:focus').val('Olá, vc clicou aqui!')
    })

    // seleciona apenas o botão que possui o type=submit
    $('#register :submit').on('click', e => {
        e.preventDefault()
        console.log('Você clicou no botão!')
    })
});