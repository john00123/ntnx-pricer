function outputUpdate(vol) {
  document.querySelector('#core').value = vol;
  year1 = 0.6;
  price = Math.round(vol * year1);
  $('.money').text(price);
}


function inputChange(){
  vol2 = $('#core').val();
  year1 = 0.6;
  price = Math.round(vol2 * year1);
  $('.money').text(price);
}


$('#core').on('keyup', inputChange);




function InputCheck(){
  if($('#core').is(":focus")){
    $('#core2').fadeIn('fast');
  }
  else{
    $('#core2').fadeOut('fast');
  }
}

$('input').click(InputCheck);
