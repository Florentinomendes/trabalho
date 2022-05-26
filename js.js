var posAct_y, posAct_x;
function tecla_clicada (){
var tecla= event.keyCode;
if(tecla==38){//cima
    posAct_y=-1;
}if(tecla==40){//baixo
    posAct_y=1;
}if(tecla==37){//esquerda
    posAct_y=-1;
}if(tecla==39){//direita
    posAct_y=1;
}
if(tecla==32){ //barra para atirar
    
}
}
function tecla_solta (){
    if((tecla==38)||(tecla==40)){//cima
        posAct_y=0;
    }
    if((tecla==39)||(tecla==37)){//cima
        posAct_y=0;
    }
}