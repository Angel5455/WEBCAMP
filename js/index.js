(function() {
    'use strict';
    $('div.ocultar').hide();
    $('.programa-evento .info-curso:first').show();

    $('.menu-programa a').on('click', function() {


        var enlaces = $(this).attr('href');
        console.log(enlaces);

    });


})();
