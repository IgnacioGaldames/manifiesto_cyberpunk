//On Document ready
$(document).ready(function() {

    //Funciones

    var miTitulo = 'Manifiesto Cyberpunk';

    function theGlitch() {
        document.title = miTitulo;
        $('#glitch').text(miTitulo);
        $('#glitch').attr("data-text", miTitulo)
    }
});
