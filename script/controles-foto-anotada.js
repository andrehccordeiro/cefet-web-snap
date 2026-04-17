let selectFiltro = document.querySelector('#filtro-da-foto');
let imagemAnotada = document.querySelector('.foto-anotada img');

selectFiltro.addEventListener('change', function(e) {
    imagemAnotada.style.filter = e.target.value;
});