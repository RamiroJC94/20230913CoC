$(document).ready(function() {
    // Validar que las contraseñas coincidan
    $("#form_register").submit(function() {
      var password = $("#password").val();
      var confirm_password = $("#confirm_password").val();
  
      if (password != confirm_password) {
        // Las contraseñas no coinciden
        $("#confirm_password").addClass("is-invalid");
        $("#password_mismatch_error").show();
        return false;
      }
  
      // Validar que se haya aceptado los términos y condiciones
      var terms_and_conditions = $("#terms_and_conditions").is(":checked");
      if (!terms_and_conditions) {
        // No se han aceptado los términos y condiciones
        $("#terms_and_conditions_error").show();
        return false;
      }
  
      // Las contraseñas coinciden y se han aceptado los términos y condiciones
      return true;
    });
  });
  