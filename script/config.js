window.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('tema');
  
    // Verifica o estado inicial do checkbox
    if (localStorage.getItem('isCheck') === 'true') {
      document.body.classList.add('dark-mode');
      checkbox.checked = true;
    }else{
        document.body.classList.add('light-mode');
      checkbox.checked = false;
    }
  
    // Altera o tema ao alternar o checkbox
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('isCheck', 'true');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('isCheck', 'false');
      }
    });
  });
