function incluir(){

    var area1 = document.getElementById('exampleInputEmail1').value;
    var area2 = document.getElementById('exampleFormControlTextarea1').value;

    if(area1 == '' || area1 == null){
        alert('Aviso precisa de um título')
    }
    else{
        if(area2 == '' || area2 == null){
            alert('Aviso precisa de uma descrição')
        }
        else{
            alert('Aviso Atualizado... OU SERÁ QUE NÃO..')
            window.location.href='../page-prof-ihm/index.html'
        }
    }
}

function excluir(){
    alert('Aviso Excluído...( ͡❛ ͜ʖ ͡❛)...')
    window.location.href='../page-prof-ihm/index.html'
}