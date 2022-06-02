
const naruto= document.querySelector('.naruto');
const arranha= document.querySelector('.arranha');
const tela_fim= document.querySelector('.tela_jogo')

const saltar=() => {//Para adicionarmos classe na img naruto 
    naruto.classList.add('pular')
    setTimeout(() => {
        naruto.classList.remove('pular')
    }, 500);
}//Definimos0 o método setTimeout para remover a classe pular do css cada vez que o teclado foi acionado

const loop_jogo= setInterval(() => {
        const arranhaPos = arranha.offsetLeft;
        const narutoPos = +window.getComputedStyle(naruto).bottom.replace('px', ''); //serve para pegarmos o estilo completado na imagem tirando o px
        
        console.log(narutoPos);
        
        if (arranhaPos <= 120 && arranhaPos > 0 && narutoPos < 80) {
            
            arranha.style.animation = 'none';
            arranha.style.left = `${arranhaPos}px`; //Vai ficar parado onde aconteceu a colisão
            naruto.style.animation = 'none';
            naruto.style.bottom = `${narutoPos}px`;

            naruto.src="3c50b7ea149f7187fc1982cfaad4ae46 (1).webp"
            naruto.style.width= '80px';
            naruto.style.height='100px'
            naruto.style.marginLeft= '30px'
            naruto.style.bottom='0'
            clearInterval(loop_jogo);
           
        }
    },10);






document.addEventListener('keydown', saltar);

