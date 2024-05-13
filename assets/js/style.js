
openMenu.addEventListener('click', () => {

	
	menu.style.display = "flex"

	menu.style.right = (menu.offsetWidth * -1) + 'px'

	
	setTimeout(()=> {
		
		menu.style.opacity = '1'

		
		menu.style.right = "0"

		openMenu.style.display = 'none'
	}, 10);
})


closeMenu.addEventListener('click', () => {

	menu.style.opacity = '0'

	menu.style.right = (menu.offsetWidth * -1) + 'px'

	
	setTimeout(()=> {
		menu.removeAttribute('style')
		openMenu.removeAttribute('style')
	}, 200);
})



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
  