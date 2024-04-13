window.onload = function(e){
var btnRecuperar = document.getElementById("btnRecuperar")

var txtEmail = document.getElementById("txtEmail")



btnRecuperar.onclick = function(e){

    e.preventDefault()

    var email = txtEmail.value

    if(email == ""){
        exibirMensagemErro("CAMPO E-MAIL OBRIGATORIO")

    }else{
        recuperarSenha(email)
    }
}

function exibirMensagemErro(mensagem){

    var spnErro = document.getElementById("spnErro")

    spnErro.innerText = mensagem

    spnErro.style.display = "block"

    setTimeout(function(){
        spnErro.style.display = "none"
    }, 5000)
}

function recuperarSenha(email){
    alert("Foi enviado um email para a recuperação da senha para: " + email)

}
}