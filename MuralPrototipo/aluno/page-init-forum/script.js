function incluir(){

    var area1 = document.getElementById('exampleInputEmail1').value;
    var area2 = document.getElementById('exampleFormControlTextarea1').value;

    if(area1 == '' || area1 == null){
        alert('Discussão precisa de um título')
    }
    else{
        if(area2 == '' || area2 == null){
            alert('Discussão precisa de uma descrição')
        }
        else{
            alert('DISCUSSÃO INCLUÍDA... de mentirinha')
            window.location.href='../page-si-ihm/index.html'
        }
    }
}