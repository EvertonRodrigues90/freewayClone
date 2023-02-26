
function dificuldade(){
 if(meusPontos  > 1){
    for (let i = 0; i < velocidadeCarros.length; i++){
      velocidadeCarros[i] = velocidadeCarros[i] +1;
      console.log(velocidadeCarros);
    }
 }
    
   }


function diminuiDificuldade(){
  if(meusPontos > 0){
  for (let i = 0; i < velocidadeCarros.length; i++){
    velocidadeCarros[i] = velocidadeCarros[i] -1;
    console.log(velocidadeCarros);
    }
  }
}