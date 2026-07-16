const botao = document.getElementById('btnCumprimentar');
const botaoComida = document.getElementById('btnComida');
const botaoBolinha = document.getElementById('btnBolinha');
const imagemGif = document.getElementById('tobiGif');
const musica = document.getElementById('musicaFundo');
const titulo = document.getElementById('titulo');
const gifNormal = 'assets/tobi_inicial.gif';
const gifCumprimento = 'assets/mao_loop_count.gif';

musica.volume = 0.1;


//Botão de Cumprimentar
botao.addEventListener('click', function() {
        musica.loop = true; 
        musica.play();
        imagemGif.src = gifCumprimento;
        titulo.textContent = 'AU! AU!';
        imagemGif.style.maxWidth = '300px';
        imagemGif.style.height = '300px';
        botaoComida.style.display = 'inline-block';
        botaoBolinha.style.display = 'inline-block';        
    });


//comida e bolinha

botaoComida.addEventListener('click', function() {
    titulo.style.display = 'none'; 
    imagemGif.style.maxWidth = '300px';
    imagemGif.style.height = '300px';
    imagemGif.src = 'assets/tobi_comendo.gif';
    musica.src = 'assets/som_comendo.mp3';
    musica.loop = false; 
    musica.volume = 0.5;
    setTimeout(function() {musica.play();}, 2000);
});
    

botaoBolinha.addEventListener('click', function() {
    titulo.style.display = 'none'; 
    imagemGif.style.maxWidth = '300px';
    imagemGif.style.height = '300px';
    imagemGif.src = 'assets/tobi_bolinha.gif';
    musica.src = 'assets/som_bolinha.mp3';
    musica.play();
});
