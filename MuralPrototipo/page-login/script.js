function entrar(){

    var area1 = document.getElementById('exampleInputEmail1').value;
    var area2 = document.getElementById('exampleInputPassword1').value;

    if(area1 == 'Aluno'){
        if(area2 == 'senha'){
            window.location.href='../aluno/page-main-si/index.html'
        }
        else{
            alert('Login ou senha incorretos!')
        }
    }
    else{
        if(area1 == 'Professor'){
            if(area2 == 'senha'){
                window.location.href='../professor/page-main-prof/index.html'
            }
            else{
                alert('Login ou senha incorretos!')
            }
        }
        else{
            alert('Login ou senha incorretos!')
        }
        alert('Login ou senha incorretos!')
    }
    
}