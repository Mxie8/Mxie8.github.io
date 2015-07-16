$(document).ready(function(){

  $('#wander').mouseover(function(){
    $(this).animate(
      {opacity:0.5},
    10
    );
    $('#fest').show();
    $('#fest').css(
      {opacity:1.0}
    );
  });
  $('#wander').mouseout(function(){
    $(this).animate(
      {opacity:1.0},
    10
    );
    $('#fest').hide();
  });
  $('#poo').mouseover(function(){
    $(this).animate(
      {opacity:0.5},
    10
    );
    $('#chells').show();
  });
  $('#poo').mouseout(function(){
    $(this).animate(
      {opacity:1.0},
    10
    );
    $('#chells').hide();
  });

  $('#run').mouseover(function(){
    $(this).animate(
      {opacity:0.5},
    10
    );
    $('#ran').show();
  });
  $('#run').mouseout(function(){
    $(this).animate(
      {opacity:1.0},
    10
    );
    $('#ran').hide();
  });


  $('#uni').mouseover(function(){
    $(this).animate(
      {margin:'0px, 0px, 0px, 1100px'},
      10000
    )
  });

  $('#uni').click(function(){
    $(this).animate(
      {margin:'0px, 1100px, 0px, 0px'},
      10
    )
  });
});
