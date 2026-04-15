let visibilidadeDasMarcacoesEl = document.querySelector('#visibilidade-das-marcacoes');
let estadoDaMarcacao = visibilidadeDasMarcacoesEl.checked;
let marcacao = document.querySelector('.marcacao')
if(estadoDaMarcacao){
    visibilidadeDasMarcacoesEl.classList.remove(marcacao);
}else{
    visibilidadeDasMarcacoesEl.classList.add(marcacao);
}