document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os elementos com a classe "animate"
    const elements = document.querySelectorAll('.animate');
  
    // Função para verificar visibilidade dos elementos usando IntersectionObserver
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); // Remove a classe caso saia da viewport
        }
      });
    });
  
    // Observar cada elemento com a classe "animate"
    elements.forEach(element => observer.observe(element));
  });

  /* esconder barra */

  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar"); // Seleciona a barra de navegação
    const missionSection = document.querySelector("#mission"); // Seleciona a seção "Nossa Missão"
  
    const missionOffsetTop = missionSection.offsetTop; // Posição superior da seção
    let lastScrollY = window.scrollY; // Valor inicial do scroll
  
    window.addEventListener("scroll", function () {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > missionOffsetTop) {
        if (currentScrollY > lastScrollY) {
          // Se estiver rolando para baixo e além da seção, esconder a navbar
          navbar.classList.add("hidden");
        } else {
          // Se estiver rolando para cima, mostrar a navbar
          navbar.classList.remove("hidden");
        }
      } else {
        // Sempre mostrar a navbar na tela inicial
        navbar.classList.remove("hidden");
      }
  
      lastScrollY = currentScrollY; // Atualiza a última posição do scroll
    });
  });
  
  let currentIndex = 0;

  function showSlide(index) {
      const items = document.querySelectorAll('.carousel-item');
      const inner = document.querySelector('.carousel-inner');
      if (index >= items.length) currentIndex = 0;
      if (index < 0) currentIndex = items.length - 1;
      inner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  function nextSlide() {
      currentIndex++;
      showSlide(currentIndex);
  }
  
  function prevSlide() {
      currentIndex--;
      showSlide(currentIndex);
  }
  
  // Auto-play (opcional)
  setInterval(nextSlide, 5000); // Muda de slide a cada 5 segundos

  document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById('fixed-logo');
    const slogan = document.getElementById('fixed-slogan');
    const primeiraSecao = document.querySelector('.pagina-inicial'); // Seleciona a primeira seção

    if (!primeiraSecao) {
        console.error("Elemento .pagina-inicial não encontrado!");
        return;
    }

    const alturaPrimeiraSecao = primeiraSecao.offsetHeight;

    function verificarScroll() {
        const scrollAtual = window.scrollY;

        // Se o scroll for maior que a altura da primeira seção, esconde o logo e o slogan
        if (scrollAtual > alturaPrimeiraSecao) {
            logo.classList.add('hidden');
            slogan.classList.add('hidden');
        } else {
            logo.classList.remove('hidden');
            slogan.classList.remove('hidden');
        }
    }

    // Adiciona o evento de scroll
    window.addEventListener('scroll', verificarScroll);

    // Verifica o scroll ao carregar a página
    verificarScroll();
});