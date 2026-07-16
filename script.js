const botao = document.getElementById('btnCumprimentar');
const imagemGif = document.getElementById('tobiGif');
const musica = document.getElementById('musicaFundo');
const titulo = document.getElementById('titulo');
const gifNormal = 'assets/tobi_inicial.gif';
const gifCumprimento = 'assets/mao_loop_count.gif';

musica.volume = 0.1;


botao.addEventListener('click', function() {
        musica.play();
        imagemGif.src = gifCumprimento;
        titulo.textContent = 'AU AU!'
        imagemGif.style.maxWidth = '320px';
        imagemGif.style.height = '320px';        
});
