const botao = document.getElementById('btnCumprimentar');
const imagemGif = document.getElementById('tobiGif');
const mensagem = document.getElementById('mensagem');
const musica = document.getElementById('musicaFundo');


const gifNormal = 'assets/tobi_inicial.gif';
const gifCumprimento = 'assets/mao_loop_count.gif';
musica.volume = 0.1;


botao.addEventListener('click', function() {
        musica.play();
        imagemGif.src = gifCumprimento;
});