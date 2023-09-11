$(document).ready(function(){
    $('#disable-effects').on('click', e => {
        jQuery.fx.off = !jQuery.fx.off
    })
});