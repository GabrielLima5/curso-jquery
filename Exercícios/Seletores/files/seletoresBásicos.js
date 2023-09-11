$('h1').css({ 'color': 'red'}) // nome de tag

$('#logo').html('Negócios') // pelo id

$('.paragrafo').animate({
    fontSize: '50px',
    opacity: 0.7,
}, 3000)  // pela classe

$('header nav.menu').css('border', '1px solid orange') // seletor composto

$('#register, .home').css('background-color', '#ccc') // múltiplos seletores