$(document).ready(function(){
    $('#toggle_cars').on('click', e => {
        let hiddenCars = $('.cars_list li:hidden').length;
        let method = hiddenCars ? 'show' : 'hide'
        
        eval(`$('.cars_list li').${method}()`)
    });
});