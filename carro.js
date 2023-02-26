//variaveis das posiçoes dos carros
let xCarros = [600, 620, 610, 600,605];
let yCarros = [45, 155, 267, 100,320];

// variaveis velocidade dos carros
let velocidadeCarros = [4, 6, 7, 5, 3]



//tamanho do carro
let comprimentoDoCarro = 40;
let alturaDoCarro = 30;


function mostraCarros(){
  for(let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i],comprimentoDoCarro,alturaDoCarro);
  }

}

function movimentaCarros(){
  for(let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicial(){
  for(let i = 0; i < imagemCarros.length; i++){
    if(xCarros[i] < - 40){
      xCarros[i] = 600;
    }
  }
}