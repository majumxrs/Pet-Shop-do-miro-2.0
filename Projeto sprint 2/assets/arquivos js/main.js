$(document).ready(function(){
    $("#linhas").on("click", function() {
        var aberto = document.getElementById("submenu").style.display;
        if(aberto == 'block')
            document.getElementById("submenu").style.display = "none";
        else
            document.getElementById("submenu").style.display = "block";
    });
    $(".add-car").on("click", function(e){
        let produto = $(this).parent().parent().parent().parent();
        let img = produto.find('.img').find('img')[0].src;
        let nome = produto.find('.nome').html();
        console.log( nome );
        let preco = produto.find('.preco').html().replace( "R$" , "" ).replace( "," , "." );
        let quantidade = parseInt( produto.find( '#quantidade' ).html() );
        let carrinho = JSON.parse(localStorage.getItem('carrinho')|| '[]');
        carrinho.push({
            nome: nome,
            preco: preco,
            img: img,
            quantidade: quantidade
        });
        
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        e.preventDefault();
    });
    if($('.carrinho').length){
        let carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
        let total = 0;
        for( let i = 0 ; i < carrinho.length; i++) {
            let id = carrinho[i].nome.replace( /[\n\r\s\t]+/g , '-' );
            if( $( '#'+id).length == 0 ) {
                let produto = document.createElement( 'div');
                $( produto ).attr( 'id' , id );
                let nome = document.createElement( 'span');
                let preco = document.createElement( 'span');
                let img = document.createElement( 'img');
                let quantidade = document.createElement( 'span' );
                
            
                $( nome ).html( carrinho[i].nome );
                $(preco).html( carrinho[i].preco);
                $(img)[0].src = carrinho[i].img;
                $( quantidade ).html( carrinho[i].quantidade );
                $( quantidade ).attr( 'class' , 'quantidade' );
    
                produto.append( img );
                produto.append( nome );
                produto.append( preco );
                produto.append( quantidade );
                $( '.carrinho' ).append( produto );
            } else {
                quantidadeAtual = parseInt( $( "#"+id ).find( '.quantidade' ).html() );
                quantidadeAtual = quantidadeAtual + carrinho[i].quantidade;
                $( "#"+id ).find( '.quantidade' ).html( quantidadeAtual );
            }
            
            total = parseFloat (total) + parseFloat( carrinho[i].preco.replace("," , "."));
        }
        $( '.total' ).html(total);
        let quantosprod = carrinho.length;
        $('#quantprod').html("Você tem "+ quantosprod+ " produtos em seu carrinho");
    }
});

document.getElementById("nome").addEventListener("input",verificaNome);
function verificaNome(){
    this.value = this.value.replace(/\d/,"");//d = número
}
document.getElementById("cartao").addEventListener("input",verificaNnum);
function verificaNnum(){
    this.value = this.value.replace(/\D/g,"").replace(/([0-9]{4})([0-9]{4})([0-9]{4})([0-9]{4})/,"$1 $2 $3 $4");//D = letra
}
document.getElementById("data").addEventListener("input",verificadata);
function verificadata(){
    this.value = this.value.replace(/\D/,"").replace(/([0-9]{2})([0-9]{4})/,"$1/$2");
}
document.getElementById("cvv").addEventListener("input",verificacvv);
function verificacvv(){
    this.value = this.value.replace(/\D/,"");
}