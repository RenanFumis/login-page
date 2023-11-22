const formulario = document.getElementById('btn-login')

const campos = document.querySelectorAll('.requerido')

const spans = document.querySelectorAll('.span-requerido')








function setError(index){
  campos[index].style.border = '1px solid #e63636';
  spans[index].style.display = 'block'
}

function removeError(index){
  campos[index].style.border = ''
  spans[index].style.display = 'none'
}


function nomeValidado(){
  if(campos[0].value !== 'Renan'){
    setError(0)
  }else{
    removeError(0)
    
  }
}

function senhaValidada(){
  if(campos[1].value !== 'renan'){
    setError(1)
  }else{
    removeError(1)
  
  }
}

function limparCampos() {
  document.querySelector('.usuario').value = '';
  document.querySelector('.senha').value = '';
  
  
}