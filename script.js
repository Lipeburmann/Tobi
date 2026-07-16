// 1. Pegamos todos os elementos do HTML pelo ID:
const botao = document.getElementById('btnCumprimentar');
const botaoComida = document.getElementById('btnComida');
const botaoBolinha = document.getElementById('btnBolinha');
const imagemGif = document.getElementById('tobiGif');
const musica = document.getElementById('musicaFundo');
const titulo = document.getElementById('titulo');
const gifNormal = 'assets/tobi_inicial.gif';
const gifCumprimento = 'assets/mao_loop_count.gif';
musica.volume = 0.1;


//Ação do primeiro clique (Cumprimentar)
botao.addEventListener('click', function() {
        musica.play();
        imagemGif.src = gifCumprimento;
        titulo.textContent = 'AU! AU!';
        imagemGif.style.maxWidth = '300px';
        imagemGif.style.height = '300px';
        botaoComida.style.display = 'inline-block';
        botaoBolinha.style.display = 'inline-block';        
    });

//interaçao
function interagirComTobi(novoGif, novaMusica) {
    titulo.style.display = 'none'; 
    imagemGif.style.maxWidth = '300px';
    imagemGif.style.height = '300px';
    imagemGif.src = novoGif;
    musica.src = novaMusica;
    musica.play();
}

botaoComida.addEventListener('click', function() {
    interagirComTobi('assets/tobi_comendo.gif', 'assets/som_comendo.mp3');
});
    
botaoBolinha.addEventListener('click', function() {
    interagirComTobi('assets/tobi_bolinha.gif', 'assets/som_bolinha.mp3');
});