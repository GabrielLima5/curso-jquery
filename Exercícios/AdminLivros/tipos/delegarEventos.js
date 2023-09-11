$(document).ready(function(e){
    // delegando evento de click na tr ao tbody
    $('#books_list tbody').on('click', 'tr', e => {
        e.preventDefault()
        $(e.delegateTarget).find('tr').removeClass('trselected')
        $(e.target).addClass('trselected')
    }) 

    $('#btn-add-book').on('click', e => {
        let tr = 
        `
            <tr>
                <td>Til</td>
                <td>José de Alencar</td>
            </tr>
        `

        $('#books_list tbody').append(tr)
    })
})