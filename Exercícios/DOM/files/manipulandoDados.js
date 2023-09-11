$(document).ready(function(){
    // retornando o dado de um elemento
    $('.cars_list li').on('click', e => {
        console.log($(e.target).data('ano'))
    })
    $('.cars_list li:first').data('ano')

    // definindo uma dado de um elemento
    $('.cars_list li:first').data('ano', '2014')

    // removendo um dado de um elemento 
    // (remove apenas dados criados por meio do jQuery)
    $('.cars_list li:first').removeData('ano')
});