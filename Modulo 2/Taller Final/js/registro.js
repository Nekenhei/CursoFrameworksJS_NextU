// Hemos omitido los acentos en los comentarios por compatibilidad

function validar(formulario) {

  expresionRegularCorreo = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  expresionRegularContrasena = new RegExp('[A-Za-z0-9]{7}')

  if(formulario.nombres.value==""){
    document.getElementById("errorNombre").style.display= "block"
    document.getElementById("errorNombre").textContent= "Debe ingresar un nombre y apellido"
    return false
  }

  if (!expresionRegularCorreo.test(formulario.email.value)){
    document.getElementById("errorEmail").style.display= "block"
    document.getElementById("errorEmail").textContent= "Correo Invalido"
    return false
  }

  if(!expresionRegularContrasena.test(formulario.contrasena.value)){
    document.getElementById("errorContrasena").style.display= "block"
    document.getElementById("errorContrasena").textContent= "La contraseña debe tener al menos 7 caracteres"
    return false
  }

  if(formulario.contrasena.value != formulario.confirmacion.value){
    document.getElementById("errorConfirmacion").style.display= "block"
    document.getElementById("errorConfirmacion").textContent= "Las contraseñas no coinciden"
    return false
  }

  if(!formulario.acepto.checked){
    document.getElementById("errorAcepto").style.display= "block"
    document.getElementById("errorAcepto").textContent= "Debe aceptar los términos y condiciones"
    return false
  }

  return true
}
