//Cálculo
window.addEventListener('DOMContentLoaded', function() {

    // Verifica o estado inicial do checkbox
    if (localStorage.getItem('isCheck') === 'true') {
      document.body.classList.add('dark-mode');
      
    }else{
        document.body.classList.add('light-mode');
    
    }
  
    // Altera o tema ao alternar o checkbox

    
  });



function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}


