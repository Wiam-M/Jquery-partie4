$(function() {
    $('body').append('<h1>Exercice 2</h1>','<p>Créer un input qui récupère le nombre de clics sur un bouton</p>');
    $('body').append('<input type="number" id="input">');
    $('body').append('<button type="button" class="plus">+</button>', '<button type="button" class="minus">-</button>');
    var counter = 0;
        $('.plus').click(function () { 
                counter++;
                $('input').val(counter);
                console.log(counter)
             })
        $('.minus').click(function () { 
            if (counter > 0){
                counter--;
                $('input').val(counter);
            }
        console.log(counter)
         })
  })
