$(document).ready(function(){
    // evento para quando pressionarmos um botão do mouse
    $('h1').mousedown(e => {
        console.log('apertei o mouse!')
    })

    // evento para quando o botão do mouse sobe, após pressionarmos
    $('h1').mouseup(e => {
        console.log('soltei o botão do mouse')
    })

    // evento para quando o botão do mouse é clicado (apertou e soltou o botão)
    $('h1').click(e => {
        console.log('cliquei no botão!')
    })

    $('h3.books').click(e => {
        $(e.target).text('clicou em mim')
    })

    // forçando o clique em um elemento
    $('h3.books').click()

    // evento para quando o botão DIREITO do mouse é clicado
    $('img').contextmenu(e => {
        alert('Clicamos com o botão direito')
    })

    // evento para quando ocorre um duplo clique
    $('table tbody tr').dblclick(e => {
        console.log($(e.target).text())
        $(e.target).css({
            backgroundColor: 'black',
            color: 'white'
        })
    })

    // forçando o duplo clique em um elemento
    $('table tbody tr:eq(2)').dblclick()

    // evento para quando o cursor entra em um elemento
    $('table tbody tr').mouseenter(e => {
        $(e.target).addClass('trselected')
    })

    // evento para quando o cursor sai de um elemento
    $('table tbody tr').mouseleave(e => {
        $(e.target).removeClass('trselected')
    })

    // evento para quando o cursor "entra" e "sai" de um elemento
    // possui uma função principal dizendo o que deve acontece caso o cursor entre
    // e uma função callback dizendo o que deve acontecer caso o cursor saia
    $('table tbody tr').hover(e => {
        $(e.target).addClass('trselected')
    }, e => {
        $(e.target).removeClass('trselected')
    })

    // evento para quando o mouse está se movendo dentro de um elemento
    $('table tbody tr').mousemove(e => {
        let x = e.pageX
        let y = e.pageY
        $('h1').text(`Posição X: ${x}; Posição Y: ${y}`)
    })
});