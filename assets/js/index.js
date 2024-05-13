document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
  
    stars.forEach(function(star) {
      star.addEventListener('click', function() {
        const value = parseInt(this.getAttribute('data-value'));
  
        // Remove a classe 'active' de todas as estrelas
        stars.forEach(function(s) {
          s.classList.remove('active');
        });
  
        // Adiciona a classe 'active' para todas as estrelas até a estrela clicada
        for (let i = 0; i < value; i++) {
          stars[i].classList.add('active');
        }
      });
    });
  });
  