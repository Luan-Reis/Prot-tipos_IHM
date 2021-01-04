function entrar(){

    var area1 = document.getElementById('exampleInputEmail1').value;
    var area2 = document.getElementById('exampleInputPassword1').value;

    if(area1 == 'Login'){
        if(area2 == 'senha'){
            window.location.href='../page-main/index.html'
            alert('Login Efetuado');
        }
        else{
            alert('Login ou senha incorretos!')
        }
    }
    else{
        alert('Login ou senha incorretos!')
    }
    
}