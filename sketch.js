function setup() {
 createCanvas(400, 400);
}
let xBol=200;
let yBol=200;
let diametro=50;
let velocidadeX=1;
function draw() {
 background(0);
 circle(xBol,yBol,diametro);
 xBol +=velocidadeX;
 if (xBol+diametro/2>=400){
  velocidadeX*=-1;
 } 
 if (xBol-diametro/2<=0){
    velocidadeX*=-1;
 }
rect(0,15,20.6);
}
