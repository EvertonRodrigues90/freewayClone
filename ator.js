//variaveis do ator
let xAtor = 100;
let yAtor = 366;


let colisao = false;

let meusPontos = 0;


function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 28, 28);
}

function moveAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 5;
  }
  // se quiser que o ator se mexa para os lados ativar essas linhas abaixo
  /* if(keyIsDown(LEFT_ARROW)){
    xAtor -=5;
  }
   if(keyIsDown(RIGHT_ARROW)){
    xAtor +=5;
  }*/
}

//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter);
function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoDoCarro, alturaDoCarro, xAtor, yAtor, 10);
    if (colisao) {
      somColisao.play();
      voltaAtorPosicaoInicial();
      diminuiPontos();
      diminuiDificuldade();
    }
  }
}

function voltaAtorPosicaoInicial() {
  yAtor = 380;
}

function atorNaoSaiDaTela() {
  if (yAtor < 0) {
    yAtor *= -1;
  }
  if (yAtor > 380) {
    voltaAtorPosicaoInicial();
  }
}

