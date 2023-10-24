const frmRegistro = document.getElementById('frm-registro');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const contraseña = document.getElementById('contraseña');
const repetirContraseña = document.getElementById('repetircontraseña');
const nombreError = document.getElementById('nombreError');
const apellidoError = document.getElementById('apellidoError');
const correoError = document.getElementById('correoError');
const contraseñaError = document.getElementById('contraseñaError');
const repetirContraseñaError = document.getElementById('repetirContraseñaError');
const mensajeCorrecto = document.getElementById('mensajeCorrecto');
const bttSuscripcion = document.getElementById('bttSuscribe');


frmRegistro.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Limpiar mensajes de error
    nombreError.textContent = '';
    apellidoError.textContent = '';
    correoError.textContent = '';
    contraseñaError.textContent = '';
    repetirContraseñaError.textContent = '';
    

    // Validar nombre
    if (nombre.value.trim() === '') {
        nombreError.textContent = 'El nombre es obligatorio';
        nombre.classList.add('input-error');
    }else{
      nombre.classList.remove('input-error');
    }
    
    // Validar apellido
    if (apellido.value.trim() === '') {
        apellidoError.textContent = 'El apellido es obligatorio';
        apellido.classList.add('input-error');
    }else{
      apellido.classList.remove('input-error');
    }
    
    // Validar correo
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regexEmail.test(correo.value)) {
        correoError.textContent = 'El correo electrónico no es válido';
        correo.classList.add('input-error');
    }else{
      correo.classList.remove('input-error');
    }
    
    // Validar contraseña
    if (contraseña.value.length < 8) {
        contraseñaError.textContent = 'La contraseña debe tener al menos 8 caracteres';
        contraseña.classList.add('input-error');
    }else{
      contraseña.classList.remove('input-error');
    }
    
    // Validar repetir contraseña
    if (repetirContraseña.value !== contraseña.value) {
        repetirContraseñaError.textContent = 'Las contraseñas no coinciden';
        repetirContraseña.classList.add('input-error');
        }else if (repetirContraseña.value == ''){ 
          repetirContraseñaError.textContent = 'Debe repetir contraseña, no puede ser vacio';
          repetirContraseña.classList.add('input-error');
    } else {
      repetirContraseña.classList.remove('input-error');
    }

    
    // Verificar si hay algún mensaje de error
    if (nombreError.textContent || apellidoError.textContent || correoError.textContent || contraseñaError.textContent || repetirContraseñaError.textContent)  {
        return;
      }else{
        window.location.href = '/login.html';
      }

    //el formulario es válido
    mensajeCorrecto.textContent = '¡Registrado Correctamente!';
    mensajeCorrecto.style.color = 'green';
});