$('main h1').css('color', 'red') // elementos filhos
            
$('main > .title').css('border', '1px solid blue') // filho direto

$('.paragrafo + p').css({
    'background-color': 'red',
    'color': 'white'
}) // irmão adjacente (mais próximo)

$('.paragrafo ~ p').css({
    'background-color': 'red',
    'color': 'white'
}) // irmãos