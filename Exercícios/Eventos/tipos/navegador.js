// quando a janela do navegador é redimensionada
$(window).resize(e => {
    console.log(`Largura: ${$(window).width()}
    Altura: ${$(window).height()}`)
})

// quando a barra de rolagem (scroll) é alterada
$(window).scroll(e => {
    console.log(`Você está na posição ${$(window).scrollTop()}`)
})