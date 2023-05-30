$(document).ready(function() {
    
    $("#linhas").on("click", function() {
        var aberto = document.getElementById("submenu").style.display;
        if(aberto == 'block')
            document.getElementById("submenu").style.display = "none";
        else
            document.getElementById("submenu").style.display = "block";
    });
    $('.todo-menu').scrollupbar();
    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
      });
    $(".carrossel-pricipal").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
      $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });
});