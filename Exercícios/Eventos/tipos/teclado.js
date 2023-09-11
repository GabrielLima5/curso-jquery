$(document).ready(function(){
    // evento para quando a tecla é pressionada
    $('#form_login [name=username]').keydown(function(e){
        console.log(`Você apertou a tecla ${e.key}`)
    })

    // evento para quando a tecla é solta
    $('#form_login [name=username]').keyup(function(e){
        console.log(`Você soltou a tecla ${e.key}`)
    })

    // evento para quando a tecla é pressionada
    // a diferença do keypress para o keydown é que o keypress não leva em conta
    // teclas especiais, como SHIFT, ALT, DELETE e TAB.
    $('#form_login [name=username]').keypress(function(e){
        console.log(`Você pressionou a tecla ${e.key}`)
    })
});