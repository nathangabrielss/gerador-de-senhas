let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");
let labelCopy = document.querySelector(".label-copy");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
    
    labelCopy.innerHTML = "Clique para copiar";
    labelCopy.style.color = "#94A3B8";
}

function copyPassword(){
    navigator.clipboard.writeText(novaSenha);
    
    labelCopy.innerHTML = "SENHA COPIADA! ✅";
    labelCopy.style.color = "#4ADE80";
    
    containerPassword.style.borderColor = "#4ADE80";
    setTimeout(() => {
        containerPassword.style.borderColor = "#334155";
        labelCopy.innerHTML = "Clique para copiar";
        labelCopy.style.color = "#94A3B8";
    }, 2000);
}