
const mario= document.querySelector('.mario');
const pipa= document.querySelector('.pipa');
const tela_fim= document.querySelector('.tela_jogo')

const saltar=() => {//Para adicionarmos classe na img mario 
    mario.classList.add('pular')
    setTimeout(() => {
        mario.classList.remove('pular')
    }, 500);
}//Definimos0 o método setTimeout para remover a classe pular do css cada vez que o teclado foi acionado

const loop_jogo= setInterval(() => {
        const pipaPos = pipa.offsetLeft;
        const marioPos = +window.getComputedStyle(mario).bottom.replace('px', ''); //serve para pegarmos o estilo completado na imagem tirando o px
        
        console.log(marioPos);
        
        if (pipaPos <= 120 && pipaPos > 0 && marioPos < 80) {
            
            pipa.style.animation = 'none';
            pipa.style.left = `${pipaPos}px`; //Vai ficar parado onde aconteceu a colisão
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPos}px`;

            mario.src="3c50b7ea149f7187fc1982cfaad4ae46 (1).webp"
            mario.style.width= '80px';
            mario.style.height='100px'
            mario.style.marginLeft= '30px'
            clearInterval(loop_jogo);
           
        }
    },10);






document.addEventListener('keydown', saltar);

