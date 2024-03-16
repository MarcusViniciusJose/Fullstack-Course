window.onload = function(e){
    var btnEntrar = document.getElementById("btnLogin")

    var txtEmail = document.getElementById("txtEmail")

    var txtSenha = document.getElementById("txtSenha")

    txtEmail.focus()

    btnEntrar.onclick = function(e){

        e.preventDefault()

        var email = txtEmail.value
        var senha = txtSenha.value

        if(email == ""){
            exibirMensagemErro("CAMPO E-MAIL OBRIGATORIO")

        }else if(senha == ""){
            exibirMensagemErro("CAMPO SENHA OBRIGATORIO")

        }else{
            realizarLogin(email, senha)
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

    function realizarLogin(email, senha){
        alert("O login foi realizado para o usuário " + email)

    }
}