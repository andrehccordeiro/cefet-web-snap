let checkboxVisibilidade = document.querySelector('#visibilidade-das-marcacoes');
let body = document.querySelector('body');

if (checkboxVisibilidade) {
    checkboxVisibilidade.addEventListener('change', function(e) {
        if (e.target.checked) {
            body.classList.add(e.target.value);
        } else {
            body.classList.remove(e.target.value);
        }
    });
}

let inputX = document.querySelector('#x-da-marcacao');
let inputY = document.querySelector('#y-da-marcacao');
let inputLargura = document.querySelector('#largura-da-marcacao');
let inputAltura = document.querySelector('#altura-da-marcacao');
let inputTitulo = document.querySelector('#titulo-da-marcacao');
let inputConteudo = document.querySelector('#conteudo-da-marcacao');
let inputCor = document.querySelector('#cor-da-marcacao');

let listaDeMarcacoes = document.querySelectorAll('.marcacao');
let marcacaoSelecionada = document.querySelector('.marcacao.selecionada');

for (let i = 0; i < listaDeMarcacoes.length; i++) {
    listaDeMarcacoes[i].addEventListener('click', function(e) {
        if (marcacaoSelecionada !== null) {
            marcacaoSelecionada.classList.remove('selecionada');
        }

        marcacaoSelecionada = e.target;
        marcacaoSelecionada.classList.add('selecionada');

        inputX.value = parseInt(marcacaoSelecionada.style.left) || 0;
        inputY.value = parseInt(marcacaoSelecionada.style.top) || 0;
        inputLargura.value = parseInt(marcacaoSelecionada.style.width) || 0;
        inputAltura.value = parseInt(marcacaoSelecionada.style.height) || 0;

        inputTitulo.value = marcacaoSelecionada.dataset.titulo || '';
        inputConteudo.value = marcacaoSelecionada.dataset.conteudo || '';
        inputCor.value = marcacaoSelecionada.dataset.cor || '#000000';

        if (marcacaoSelecionada.classList.contains('formato-oval')) {
            document.querySelector('input[value="formato-oval"]').checked = true;
        } else {
            document.querySelector('input[value="formato-retangular"]').checked = true;
        }
    });
}

function atualizaMarcacao() {
    if (marcacaoSelecionada !== null) {
        marcacaoSelecionada.style.left = inputX.value + 'px';
        marcacaoSelecionada.style.top = inputY.value + 'px';
        marcacaoSelecionada.style.width = inputLargura.value + 'px';
        marcacaoSelecionada.style.height = inputAltura.value + 'px';

        marcacaoSelecionada.dataset.titulo = inputTitulo.value;
        marcacaoSelecionada.dataset.conteudo = inputConteudo.value;
        marcacaoSelecionada.dataset.cor = inputCor.value;

        let formatoEscolhido = document.querySelector('input[name="formato-da-marcacao"]:checked');
        if (formatoEscolhido) {
            marcacaoSelecionada.classList.remove('formato-oval', 'formato-retangular');
            marcacaoSelecionada.classList.add(formatoEscolhido.value);
        }
    }
}

let camposDeEntrada = [inputX, inputY, inputLargura, inputAltura, inputTitulo, inputConteudo, inputCor];
for (let i = 0; i < camposDeEntrada.length; i++) {
    if (camposDeEntrada[i]) {
        camposDeEntrada[i].addEventListener('input', atualizaMarcacao);
    }
}

let radiosFormato = document.querySelectorAll('input[name="formato-da-marcacao"]');
for (let i = 0; i < radiosFormato.length; i++) {
    radiosFormato[i].addEventListener('change', atualizaMarcacao);
}