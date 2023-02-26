
function setup() {
  createCanvas(570, 400);
  trilhaSonora.loop();
}

function draw() {

  background(imagemDaEstrada);
  mostraAtor();
  moveAtor();
  mostraCarros();
  movimentaCarros();
  voltaPosicaoInicial();
  verificaColisao();
  placar();
  marcaPonto();
  atorNaoSaiDaTela();


}


