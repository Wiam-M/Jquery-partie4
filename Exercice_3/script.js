$(function() {
  //recuperer la valeur saisiz dans input en cliquant sur le boutton
  let randomNumber = Math.floor(Math.random()*100) + 1;
  console.log(randomNumber);
  var tries = 0;
  $('#buttonId').click(function () {
      tries ++;
     var number = $('#inputId').val();
     if (number < 1  || number > 100){
        $('#idText').text("Veuillez saisir un nombre entre 1 et 100")
    }  else if (number == randomNumber){
        $('#idText').text("Vous avez gagné au bout de, " + tries + " FOIS " + "\n" + "Le nombre saisie par votre adversaire est:  " + randomNumber );
        $('#idText').css('background-color', 'rgb(108, 207, 108)');
        setGameOver()
    }
     else if (number > randomNumber) {
        $('#idText').text("le nombre saisie est trop GRAND! essayez encore");
      }
      else if (number < randomNumber){
        $('#idText').text("le nombre saisie est trop PETIT! essayez encore");
      }
    if (tries === 5){
        $('#idText').text("Vous aves perdu, le nombre saisie par votre adversaire est:  " + randomNumber);
        $('#idText').css('background-color', 'red');
            setGameOver()
    }
  });
  function setGameOver() {
    $("input").attr('disabled','disabled');
    $("button").attr('disabled','disabled'); 
}
 
  })

