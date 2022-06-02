
//velocidade do jogo= velj, direção do jogador= dirActt, posição do jogador = posAct, elemento da div da tela recebe jog;



var dirAct_y, dirAct_x ,posAct_x,posAct_y, velj, jog;
var jogo 
var frames;
var tamTelaLargura,tamTelaAltura;


function tecla_clicada (){
var tecla= event.keyCode;
if(tecla==38){//cima
    dirAct_y=-1;
}if(tecla==40){//baixo
    dirAct_y=1;
}if(tecla==37){//esquerda
    dirAct_y=-1;
}if(tecla==39){//direita
    dirAct_y=1;
}
if(tecla==32){ //barra para atirar
    
}
}
function tecla_solta (){
    if((tecla==38)||(tecla==40)){//cima
        dirAct_y=0;
    }
    if((tecla==39)||(tecla==37)){//cima
        dirAct_y=0;
    }
}
function controlaAtor(){
 posAct_y+= dirAct_y * jog;
 posAct_x+= dirAct_x * jog;
 jog.style.top= posAct_y +"px";
 jog.style.left= posAct_x +"px";
}
function gameloop(){
 if(jogo){
     //funcões do jogo será chamada assim que o jogo virar true
     controlaAtor();
 }
 frames= requestAnimationFrame(gameloop),
}
function inicia(){
  //Aqui incializamos os componentes do nosso jogo
 jogo= true;
 //incializar jogador
 dirAct_x=dirAct_y=0; // uma forma mais simplificada de atribuir valor aos 2 variáveis.
 posAct_x= tamTelaLargura/2;
 posAct_y= tamTelaAltura/2;
 velj=4;
 jog= document.getElementById("actor_jogo");
 jog.style.top= posAct_y +"px";
 jog.style.left= posAct_x +"px";

 gameloop();

 
  //incializar a tela
  tamTelaAltura= innerHeight;
  tamTelaLargura= innerWidth;


}
document.addEventListener("load", inicia);
document.addEventListener("keydown", tecla_clicada);
document.addEventListener("keyup", tecla_solta)