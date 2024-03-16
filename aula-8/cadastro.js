window.onload = function(e){

    var btnCadastrar = document.getElementById("btnCadastrar")

    var txtNome = document.getElementById("txtNome")
    
    var txtSobrenome = document.getElementById("txtSobrenome")
    
    var txtEmail = document.getElementById("txtEmail")
    
    var txtTel = document.getElementById("txtTel")

    var slcGenero = document.getElementById("slcGenero")

    var txtSenha = document.getElementById("txtSenha")

    txtNome.focus()

    btnCadastrar.onclick = function(e){

        e.preventDefault()

        var nome = txtNome.value
        
        var sobrenome = txtSobrenome.value

        var email = txtEmail.value

        var telefone = txtTel.value

        var genero = slcGenero.value

        var senha = txtSenha.value

        if(nome == ""){
            exibirMensagemErro("CAMPO NOME OBRIGATORIO")
        }else if(sobrenome == ""){
            exibirMensagemErro("CAMPO SOBRENOME OBRIGATORIO")

        }else if(email == ""){
            exibirMensagemErro("CAMPO E-MAIL OBRIGATORIO")

        }else if(telefone == ""){
            exibirMensagemErro("CAMPO TELEFONE OBRIGATORIO")

        }
        else if(senha == ""){
            exibirMensagemErro("CAMPO SENHA OBRIGATORIO")

        }else{
            cadastrar(nome, sobrenome, email, telefone, genero, senha)
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

    function cadastrar(nome, sobrenome, email, telefone, genero, senha){
        alert("O cadastro foi realizado com sucesso, para o email " + email)
    }

}