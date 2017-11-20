function outputUpdate(vol) {
  document.querySelector('#core').value = vol;
}


function InputCheck(){
  if($('#core').is(":focus")){
    $('#core2').fadeIn('fast');
  }
  else{
    $('#core2').fadeOut('fast');
  }
}

$('input').click(InputCheck);
