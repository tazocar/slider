$(document).ready(function(){
  //cuenta los li
  var imgItems = $(".slider li").length;
  //porque la primera imagen al iniciar la página será siempre la img 1
  var imgPosition = 1;

  //agrega paginacion por cada li
  for (var i = 1; i <= imgItems; i++) {
    $(".pagination").append("<li><i class='fa fa-circle'></i></li>");
  }

  //esconde la primera, muestra las siguientes img
  $(".slider li").hide();
  $(".slider li:first").show();
  //primer circulito de color
  $(".pagination li:first").css({"color" : "#ff8d00"});

  //ejecutar funciones
  $(".pagination li").click(pagination);
  $(".right i").click(nextSlider);
  $(".left i").click(prevSlider);

  ///////////////

  function pagination(){
    //el indice del circulito elegido + 1
    var position = $(this).index() +1;
    //esconder todas las fotos
    $(".slider li").hide();
    //mostrar la que esta en el indice elegido
    $(".slider li:nth-child(" + position + ")").fadeIn();

    //Circulito de color cambia de color segun position, los demas, blancos
    $(".pagination li").css({"color" : "#fff"});
    $(".pagination li:nth-child(" + position + ")").css({"color" : "#ff8d00"});
  }

  function nextSlider(){
    if (imgPosition >= imgItems) {
      imgPosition = 1;
    } else {
      imgPosition ++;
    }

    $(".slider li").hide();
    $(".slider li:nth-child(" + imgPosition + ")").fadeIn();
    //Circulito de color cambia de color segun position, los demas, blancos
    $(".pagination li").css({"color" : "#fff"});
    $(".pagination li:nth-child(" + imgPosition + ")").css({"color" : "#ff8d00"});
  }

  function prevSlider(){
    if (imgPosition <= 1) {
      imgPosition = imgItems;
    } else {
      imgPosition --;
    }

    $(".slider li").hide();
    $(".slider li:nth-child(" + imgPosition + ")").fadeIn();
    //Circulito de color cambia de color segun position, los demas, blancos
    $(".pagination li").css({"color" : "#fff"});
    $(".pagination li:nth-child(" + imgPosition + ")").css({"color" : "#ff8d00"});
  }
})