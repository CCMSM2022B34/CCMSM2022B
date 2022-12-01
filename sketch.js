function setup() {
 createCanvas(400, 400);
}
//variaveis da bolinha
let xBol=200;
let yBol=200;
let diametro=50;
let velocidadeX=1;
let velocidadey=1;
//variaveis da raquete
function draw() {
 background(0);
  //desenha a bolinha
  
 circle(xBol,yBol,diametro);
  //movimenta a bolinha 
 xBol +=velocidadeX;
  yBol+=velocidadey;
  //faz a bolinha voltar quanda bate na direita 
 if (xBol+diametro/2>=400){
  velocidadeX*=-1;
 }
  //faz a bolinha voltar quando bate na direita 
 if (xBol-diametro/2<=0){
    velocidadeX*=-1;
 }
rect(0,150,25,100);
}

