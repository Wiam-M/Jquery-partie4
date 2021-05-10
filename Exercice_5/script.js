// $(function() {
//   $('input').focusin(function(){
//     $(this).keydown(function(e){
//       switch (e.which){
//         case 37:    //left arrow key
//             $("#div").finish().animate({
//                 left: "-=50"
//             });
//             break;
//           }
     
//     });
// })
// })

var posiX = 0;
var posiY = 0;

$('#inputId').on("keydown", function(e){
    //recupere la taille de la fenetre
    var windowHeight = $(window).height() -100;
    var windowWidth = $(window).width() -100;
    //methode .which() envoie au touches keycode
  switch (e.which){
  case 37:    //left arrow key
  //en 37 variable posiX decrement de -10
  posiX = posiX - 10;
  if (posiX > 0) {
    $(".div").css("margin-left", posiX);
  }else if (posiX < 0) {
      console.log(posiX)
      posiX = windowWidth;
        console.log(posiX)
    $(".div").css("margin-left", posiX);  
  }
      break;
  case 38:    //up arrow key
  posiY = posiY -10;
  if (posiY > 0) {
    $(".div").css("margin-top", posiY); 
  }
  else if (posiY < 0) {
      posiY = windowHeight;
  }
     
      break;
      case 39:    // flèche droite
      console.log('right');
          // $(".dive").css("margin-left", "+=10px");
          posiX = posiX+10;
          if (windowWidth > posiX){
            $(".div").css("margin-left", posiX);
          } else if (windowWidth < posiX){
            posiX = 0;
            $(".div").css("margin-left", posiX);
          }
          break;
          case 40:    // flèche du bas
          console.log('down');
              // $(".dive").css("margin-top", "+=10px");
              posiY = posiY+10;
              if (posiY < windowHeight){
                $(".div").css("margin-top", posiY);
              } else if (posiY > windowHeight){
                posiY = 0;
                $(".div").css("margin-top", posiY);
              }
              break;
         
     
  }
});

// $(document).ready(function(e){
//     $('#inputId').focus(function(){
//         $('body').keydown(function(e){
//         switch (e.which){  
//             case 37:   
//             //left arrow key
//                 $(".div").animate({
//                     left: "-=50"
//                 });
//                 break;
//             case 38:    //up arrow key
//                 $(".div").animate({
//                     top: "-=50"
//                 });
//                 break;
//             case 39:    //right arrow key
//                 $(".div").animate({
//                     left: "+=50"
//                 });
//                 break;
//             case 40:    //bottom arrow key
//                 $(".div").animate({
//                     top: "+=50"
//                 });
//                 break;
//     // }
//         }
//     });
// });
// });