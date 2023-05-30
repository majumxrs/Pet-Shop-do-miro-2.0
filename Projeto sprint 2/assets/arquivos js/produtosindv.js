$(document).ready(function() {
    $("#linhas").on("click", function() {
        var aberto = document.getElementById("submenu").style.display;
        if(aberto == 'block')
            document.getElementById("submenu").style.display = "none";
        else
            document.getElementById("submenu").style.display = "block";
    });
    $( ".img" ).zoom( { on:'click' });

    $( '.btn-quantidade' ).on( "click" , function(e) {
        let quantidadeAtual = parseInt( $( '#quantidade' ).html() );
        let operacao = $(this).data( "operacao" );
        let preco = $( this ).data( 'preco' );
        let total = 0;
        if( operacao == "mais" ) {
            quantidadeAtual = quantidadeAtual + 1;
        } else {
            if( quantidadeAtual !== 0 ) {
                quantidadeAtual = quantidadeAtual - 1;
            }
        } 
        total = preco * quantidadeAtual;
        $( '#quantidade' ).html( quantidadeAtual);
        $( '#preco' ).html( 'R$' + total.toFixed(2).replace( "." , ",") ); 
    });
});