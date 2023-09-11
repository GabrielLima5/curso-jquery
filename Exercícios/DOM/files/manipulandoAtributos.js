$(document).ready(function(){
    // retornando ou definindo o valor de um atributo
    $('.logo').attr('alt') // retornando
    $('.logo').attr('src', 'assets/images/jquery.jpg') // definindo

    // removendo um atributo
    $('h1').removeAttr('title')
});