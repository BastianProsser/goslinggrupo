document.addEventListener('DOMContentLoaded', function() {
   let form = document.querySelector("#login-form");
 
    console.log(form);
   let email = document.querySelector("#input-email");
   console.log(email);
    
   let password = document.querySelector("#password-input");
   
   function validate() {
     
     let emailValue = email.value; 
     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
     if(!emailRegex.test(emailValue)) {
       document.querySelector("#emailHelp").innerHTML = "Por favor, ingresa un correo electronico válido";
       return false;
     } 
   
    
     let passwordValue = password.value;
        if(passwordValue.length < 8) {
   
       document.querySelector("#passwordHelp").innerHTML = "La contraseña debe tener al menos 8 caracteres";
       return false;
     }
  
     return true;
   }
   
   form.addEventListener("submit", function(event) {
   
     if(!validate()) {
       event.preventDefault();
   
     } else {
       alert("El formulario se envio correctamente");
     }
    });
   
    }
   );