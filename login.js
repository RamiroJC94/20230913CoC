const frmLogin = document.getElementById('frm-login');
const correo = document.getElementById('correo');
const contraseña = document.getElementById('contraseña');
const correoError = document.getElementById('correoError');
const contraseñaError = document.getElementById('contraseñaError');

frmLogin.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Limpiar mensajes de error
    correoError.textContent = '';
    contraseñaError.textContent = '';
    
    // Validar correo
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regexEmail.test(correo.value)) {
        correoError.textContent = 'El correo electrónico no es correcto';
        correo.classList.add('input-error');
    }else {
      correo.classList.remove('input-error')
    }
    
    // Validar contraseña
    if (contraseña.value.trim() === '') {
        contraseñaError.textContent = 'La contraseña es obligatoria';
        contraseña.classList.add('input-error');
    }else{
      contraseña.classList.remove('input-error')
      }

    
    // Verificar si hay algún mensaje de error
    if (correoError.textContent || contraseñaError.textContent) {
        return;
    }else{
      window.location.href = '/home.html';
    }
    
    mensajeCorrecto.textContent = '¡Ingresó Correctamente!';
    mensajeCorrecto.style.color = 'green';
});

  