function checkSuggestion(event){
        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(document.getElementById("emailS").value)){
                alert("Email invalido");
                event.preventDefault();
                return false;
        }

        if(document.getElementById("emailS").value.trim()==""||document.getElementById("nombreS").value.trim()==""||document.getElementById("mensajeS").value.trim()==""){
                alert("Todos los campos son obligatorios");
                event.preventDefault();
                return false;
        }
        return true;
}

function checkSuscription(event){
        if(document.getElementById("email").value.trim()==""||document.getElementById("nombre").value.trim()==""||document.getElementById("password").value.trim()==""||document.getElementById("confirm-password").value.trim()==""){
                alert("Todos los campos son obligatorios");
                event.preventDefault();
                return false;
        }
        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(document.getElementById("email").value)){
                alert("Email invalido");
                event.preventDefault();
                return false;
        }
        if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(document.getElementById("password").value)){
                alert("Contraseña invalida");
                event.preventDefault();
                return false;
        }
        if(document.getElementById("password").value!=document.getElementById("confirm-password").value){
                alert("Las contraseñas son distintas");
                event.preventDefault();
                return false;
        }
        return true;
}

document.getElementById("sug").addEventListener("submit", checkSuggestion);
document.getElementById("sus").addEventListener("submit", checkSuscription);
