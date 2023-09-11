$(document).ready(function(){
    $(window).scroll(e => {
        let position = $(window).scrollTop()
        let index;

        let sections = ['.title', '.books', '.register']
        if (position < 50){
            index = 0
        } else if (position < 200){
            index = 1
        } else if (position > 200 && position < 400){
            index = 2
        }

        $(sections[index]).addClass('selected_section')
        sections.splice(index, 1)
        $(sections.join(', ')).removeClass('selected_section')
    })
})