document.addEventListener('DOMContentLoaded', function() {
    // Adiciona smooth scrolling para os links da navbar
    document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Fecha a navbar em dispositivos móveis após clicar em um link
            const navbarToggler = document.querySelector('.navbar-toggler');
            if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
                const navbarCollapse = document.querySelector('#navbarNav');
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });

    // Você pode adicionar mais funcionalidades JavaScript aqui, se necessário.
    // Ex: Animações, validação de formulário, etc.
});