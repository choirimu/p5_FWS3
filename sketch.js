let numFrames = 285;
let images = [];
let currentFrame = 1;
let img1;
let img2;
let img3;

function preload(){
  img1 = loadImage('whales.png');
  img2 = loadImage('door1.png');
  img3 = loadImage('door2.png');

  for (let i = 1; i < numFrames; i++){
    images[i] = loadImage("water/water" + i + ".png")//(1~285)
  }
}

function setup(){
  createCanvas(640,360);
  frameRate(34);
 }

function draw() {
 background(0,0,0);
 textSize(32);
 fill( 102, 150, 255);
 text('click↓', 275, 120); 
 image(img2, 280, 150, 70, 120); //닫힌 문
 
  if((mouseX > 200) && (mouseX < 400 ) && (mouseY > 100) && (mouseY < 360)){
    background(0,0,0);
    image(img3, 280, 150, 70, 120); //열린 문
  
    if (mouseIsPressed) {
      image(images[currentFrame], 0, 0, width, height); //초기값 0 285 이상 되면 에러   
   
      if(currentFrame == numFrames-1 ){ //currentframe이 numfram-e-1한 값과 같으면 
       currentFrame = 1; //currnetframe이 1이 됨
      }
      currentFrame++; //curnetFrame = currentFrame + 1
      }
    
    } 
    image(img1, mouseX-230, mouseY-100, 220, 220); //고래 
  }