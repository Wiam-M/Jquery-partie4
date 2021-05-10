$(function() {
$("#buttonHeight").click(function () { 
//   $('#div').animate({ //animer a chaque double clique on ajoute 500px
//     height: '+=20px'
// });  
$('#div').height('+=20');  
});

$("#buttonColor").click(function () { 
  $('#div').css('background-color','red');
})

$("#buttonShow").click(function () { 
  $('#div').show();
})

$("#buttonHide").click(function () { 
  $('#div').hide();
})

$("#changeBackColor").click(function () { 
  $('#div').css('background-color','');
})
})

