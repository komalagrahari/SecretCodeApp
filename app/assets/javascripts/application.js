// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

//= require jquery3
//= require popper
//= require bootstrap-sprockets


function availableCodes(){
   var availableCodes = $('#availableCodes').html().split(', ')
   if(jQuery.inArray($('#user_code_string').val(), availableCodes) != -1){
    return true;
   }
  alert('Please select available Secret Codes')
   return false;
}

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    return false;
  }else{
    return true;
  }
}
function checkValidation(){
  var first_name = $('#user_first_name').val()
  var last_name = $('#user_last_name').val()
  var pwd = $('#user_password').val()
  var confirm_pwd = $('#user_password_confirmation').val()
  var email = $('#user_email').val()
  var code = $('#user_code_string').val()
  if(first_name == ''){
    alert('First Name should not be blank.')
    return false;
  }else if(email == ''){
    alert('Email should not be blank.')
    return false;
  }else if(pwd == ''){
    alert('Password should not be blank.')
    return false;
  }else if(confirm_pwd == ''){
    alert('Confirm Password should not be blank.')
    return false;
  }else if(code == ''){
    alert('Secret Code should not be blank.')
    return false;
  }else{
  	if(IsEmail(email)==false){
      $('#invalid_email').show();
      return false;
    }else if(confirm_pwd != pwd){
      alert('Confirm Password should be same as Password.')
      return false;
    }else{
      var is_submit = availableCodes()
      if(is_submit)
      $('form').submit();
    }
  }
}
