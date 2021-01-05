function incluir(){

    var area1 = document.getElementById('exampleFormControlTextarea1').value;

    if(area1 == '' || area1 == null){
        alert('Mensagem precisa de uma descrição')
    }
    else{
        alert('MENSAGEM INCLUÍDA... de mentirinha')
        window.location.href='../page-prof-ihm-disc/index.html'
    }
}