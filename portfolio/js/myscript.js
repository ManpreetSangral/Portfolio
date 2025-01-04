

$(document).ready(function () {
    $('.off-canvas-container').hide(); // Initially hide the menu

    $('#menu-toggle').click(function () {
        $('.off-canvas-container').show().addClass('active').removeClass('closing');
    });


    //close the menu
    $('.close-icon').click(function(){
        $('.off-canvas-container').hide().removeClass('active').addClass('closing');
    });
});

