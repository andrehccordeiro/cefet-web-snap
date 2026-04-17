let balaozinho = document.querySelector('#balaozinho');
let marcacoes = document.querySelectorAll('.marcacao');

for (let i = 0; i < marcacoes.length; i++) {
    let marcacao = marcacoes[i];

    marcacao.addEventListener('mouseover', function(e) {
        let titulo = e.target.dataset.titulo;
        let conteudo = e.target.dataset.conteudo;
        let cor = e.target.dataset.cor;

        balaozinho.innerHTML = `<h2>${titulo}</h2><p>${conteudo}</p>`;
        balaozinho.style.color = cor;
    });

    marcacao.addEventListener('mouseout', function() {
        balaozinho.innerHTML = '';
    });

    marcacao.addEventListener('mousemove', function(e) {
        balaozinho.style.left = e.pageX + 'px';
        balaozinho.style.top = e.pageY + 'px';
    });
}