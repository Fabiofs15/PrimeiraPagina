function abrirModal(){
    document.getElementById('cortina').style.display = "block";
    document.getElementById('cortina').style.zIndex = "90";
    document.getElementById('cortina').style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    document.getElementById('modal').style.marginTop = '110px';

}

function fecharModal() {
    document.getElementById('cortina').style.display = "none";
    document.getElementById('cortina').style.backgroundColor = "";
    document.getElementById('modal').style.marginTop = '';
    document.getElementById('cortina').style.zIndex = '';
}

function validar() {
    var nome = document.getElementById('formulario__nome').value;
    var sobrenome = document.getElementById('formulario__sobrenome').value;
    var numero = document.getElementById('formulario__fone').value;
    var email = document.getElementById('formulario__email').value;
    
    if(nome == '' && numero == '' && email == '' && sobrenome ==''){
        window.alert('Insira os seguintes campos:\nNome, Sobrenome, Fone, Email');
        document.getElementById('formulario__nome').style.border = 'solid 0.5px red';
        document.getElementById('formulario__sobrenome').style.border = 'solid 0.5px red';
        document.getElementById('formulario__email').style.border = 'solid 0.5px red';
        document.getElementById('formulario__fone').style.border = 'solid 0.5px red';
    }
    else if(nome != '' && numero != '' && email != '' && sobrenome !=''){
        window.alert('Seu cadastro foi concluido com sucesso, Bem vindo(a) ' + nome);
        fecharModal();
    }
    //NOME EM BRANCO   
    else if(nome == '' && numero != '' && email != '' && sobrenome != ''){
        window.alert('Informe o seu Nome');
        document.getElementById('formulario__nome').style.border = 'solid 0.5px red';
    }
    else if(nome == '' && numero == '' && email != '' && sobrenome != ''){
        window.alert('Insira os seguintes campos:\nNome, Fone');
        document.getElementById('formulario__nome').style.border = 'solid 0.5px red';
        document.getElementById('formulario__fone').style.border = 'solid 0.5px red';
    }
    else if(nome == '' && email == '' && numero != '' && sobrenome != ''){
        window.alert('Insira os seguintes campos:\nNome, Email');
        document.getElementById('formulario__email').style.border = 'solid 0.5px red';
        document.getElementById('formulario__nome').style.border = 'solid 0.5px red';
    }
    else if(nome == '' && sobrenome == '' && numero != '' && email != ''){
        window.alert('Insira os seguintes campos:\nNome, Sobrenome');
        document.getElementById('formulario__sobrenome').style.border = 'solid 0.5px red';
        document.getElementById('formulario__nome').style.border = 'solid 0.5px red';
    }
    else if(nome == '' && numero == '' && email == '' && sobrenome != ''){
        window.alert('Insira os seguintes campos:\nNome, Fone, Email');
        document.getElementById('formulario__nome').style.border = 'solid 0.5px red';
        document.getElementById('formulario__fone').style.border = 'solid 0.5px red';
        document.getElementById('formulario__email').style.border = 'solid 0.5px red';
    }
    else if(nome == '' && email == '' && sobrenome == '' && numero != ''){
        window.alert('Insira os seguintes campos:\nNome, Sobrenome, Email');
        document.getElementById('formulario__email').style.border = 'solid 0.5px red';
        document.getElementById('formulario__sobrenome').style.border = 'solid 0.5px red';
        document.getElementById('formulario__nome').style.border = 'solid 0.5px red';
    }
    else if(nome == '' && sobrenome == '' && numero == '' && email != ''){
        window.alert('Insira os seguintes campos:\nNome, Sobrenome, Numero');
        document.getElementById('formulario__sobrenome').style.border = 'solid 0.5px red';
        document.getElementById('formulario__fone').style.border = 'solid 0.5px red';
        document.getElementById('formulario__nome').style.border = 'solid 0.5px red';
    }
    //SOBRENOME EM BRANCO

    else if(sobrenome == '' && nome != '' && numero != '' && email != ''){
        window.alert('Informe o seu Sobrenome');
        document.getElementById('formulario__sobrenome').style.border = 'solid 0.5px red';
    }
    else if(sobrenome == '' && numero == '' && email != '' && nome != ''){
        window.alert('Insira os seguintes campos:\nSobrenome, Fone');
        document.getElementById('formulario__sobrenome').style.border = 'solid 0.5px red';
        document.getElementById('formulario__fone').style.border = 'solid 0.5px red';
    }
    else if(sobrenome == '' && email == '' && numero != '' && nome != ''){
        window.alert('Insira os seguintes campos:\nSobrenome, Email');
        document.getElementById('formulario__email').style.border = 'solid 0.5px red';
        document.getElementById('formulario__sobrenome').style.border = 'solid 0.5px red';
    }
    else if(sobrenome == '' && numero == '' && email == '' && nome != ''){
        window.alert('Insira os seguintes campos:\nSobrenome, Fone, Email');
        document.getElementById('formulario__sobrenome').style.border = 'solid 0.5px red';
        document.getElementById('formulario__fone').style.border = 'solid 0.5px red';
        document.getElementById('formulario__email').style.border = 'solid 0.5px red';
    }

    //NUMERO EM BRANCO
    else if(numero == '' && nome != '' && email != ''){
        window.alert('Informe o numero de telefone');
        document.getElementById('formulario__fone').style.border = 'solid 0.5px red';
    }
    else if(numero == '' && email == '' && sobrenome != '' && nome != ''){
        window.alert('Insira os seguintes campos:\nNumero, Email');
        document.getElementById('formulario__email').style.border = 'solid 0.5px red';
        document.getElementById('formulario__fone').style.border = 'solid 0.5px red';
    }

    //EMAIL EM BRANCO
    else if(email == '' && nome != '' && numero != ''){
        window.alert('Informe seu Email');
        document.getElementById('formulario__email').style.border = 'solid 0.5px red';
    }
}