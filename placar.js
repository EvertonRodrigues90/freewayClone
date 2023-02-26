
function placar(){
  fill(157, 0, 255);
  textSize(20);
  textStyle(BOLD);
  text(meusPontos, width / 4, 24);
}

function marcaPonto(){
  if(yAtor < 10){
    somPonto.play();
   voltaAtorPosicaoInicial();
    meusPontos +=1;
    dificuldade();
  }
}

function diminuiPontos(){
    meusPontos -=1;
  if (meusPontos < 0){
    meusPontos = 0;
  }
}