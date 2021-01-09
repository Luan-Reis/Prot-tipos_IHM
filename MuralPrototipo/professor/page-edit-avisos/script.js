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
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Save`,
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
    })
    // alert('Aviso Excluído....')
    // window.location.href='../page-prof-ihm/index.html'
}