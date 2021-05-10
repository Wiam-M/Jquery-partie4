
$(function() {
    $('body').append('<h1>Exercice 1</h1>','<p>Créer un input qui récupère le nombre de clics sur un bouton</p>');
    $('body').append('<input type="number">', '<button type="button">click</button>');
    $('input').css('margin-left','40%');
    $('h1, p').css('text-align','center');
    $('h1, p').css('color','blueviolet');
    var counter = 0;
    $('button').click(function () { 
    counter++;
    $('input').val(counter  );
    console.log(counter)
     })
  })