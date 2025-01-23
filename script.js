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
  
  