var surviour,alien1;

function preload(){
 alien1 = loadImage('images/alien.png');
}

function setup() {
  createCanvas(800, 600);
  alien1 = new Alien(100,200,10,10);
  
}

function draw() {
  background(220);
  alien1.display();
}