//On Document ready
$(document).ready(function() {

    //Funciones
    var titulos = ['I. Cyberpunk','II. Sociedad','III. El Sistema','IV. La Visión','V. ¿Dónde estamos?'];
    var miTitulo = 'Manifiesto Cyberpunk';

    function theGlitch() {
        document.title = miTitulo;
        $('#glitch').text(miTitulo);
        $('#glitch').attr("data-text", miTitulo);

        for (var i = titulos.length - 1; i >= 0; i--) {
        	titulos[i];
        	glitchId = '#glitch' + [i+1];
	        $(glitchId).text(titulos[i]);
	        $(glitchId).attr("data-text", titulos[i]);
        }
    }
    theGlitch();
});