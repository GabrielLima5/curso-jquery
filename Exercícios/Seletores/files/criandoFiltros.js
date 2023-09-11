// criando nosso próprio filtro
$.expr[':'].carsCentury21 = function (el){
    return ($(el).data('ano') > 2000)
}
$('.cars-list li:carsCentury21').css('font-size', '32px')

$.expr[':'].carsBeforeYear = $.expr.createPseudo(function(year){
    return function(el){
        return ($(el).data('ano') < year)
    }
})
$('.cars-list li:carsBeforeYear(1960)').css('color', 'orange')
