let balaozinho = document.querySelector('#balaozinho');
let marcacao = document.querySelector('.marcacao');

marcacao.addEventListener('mouseenter', () => {
    marcacao.classList.add(balaozinho);
});

marcacao.addEventListener('mouseleave', () => {
    marcacao.classList.remove(balaozinho);
});