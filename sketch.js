var bg, bgImg;
var player;
var side1,side2,side3,side4;
var barYellow, barPink;
var line1,line2,line3,line4;
var ball;
var ga;
var score = 0;


function preload()
{
  barYellow = loadImage("yellow.png");
  barPink = loadImage("pink.png");

}
function setup() {
  createCanvas(950,600);
ball = createSprite(500,500,25,25);
side1 = createSprite(0,0,10,1200);
side2 = createSprite(950,0,10,1200);
side3 = createSprite(0,0,2000,10);
side4 = createSprite(0,600,2000,10);
line1 = [];


 
    for (var m = 37; m <= 913; m = m + 73)
{
  line1[i] = createSprite(m,325,150,50);

  
  line1[i].addImage(barYellow);
  line1[i].scale = 0.15;
  if(ball.isTouching(line1[i]))
  {
    line1[i].visible = false;
    break;
  
}

}
for (var k = 37; k<= 913; k = k + 73)
{
  line2 = createSprite(k,275,150,50);
  line2.addImage(barYellow);
  line2.scale = 0.15;
}
for (var l = 37; l<= 913; l = l + 73)
{
   line3 = createSprite(l,227,150,50);
   line3.addImage(barPink);
   line3.scale = 0.13;
   if(line3.isTouching(ball))
   {
    line3.destroy();
   }
}


for(var i = 37; i <= 913; i = i+73 ){

  line4 = createSprite(i,182,150,50);
  line4.addImage(barPink);
  line4.scale = 0.13
 
}}


function draw() {
  background("black");  
 
  /*for (var i = 0; i < Line1.length; i++) {
    if (Line1.get(i).isTouching(ball)) {
        Line1.get(i).destroy();
       
    }*/
    
  
if(ball.isTouching(side1))
{
  ball.bounceOff(side1);
}
if(ball.isTouching(side2))
{
  ball.bounceOff(side2);
}
if(ball.isTouching(side3))
{
  ball.bounceOff(side3);
}
if(ball.isTouching(side4))
{
  ball.bounceOff(side4);
}




if (ball.isTouching(line2))
{
  score = score + 1;
  line2.destroy();
}

fill("lightblue");
textSize(35);
text("Score: " + score,50,100);



  drawSprites();


movement();
}


function movement()
{
  if(keyDown("LEFT_ARROW"))
  {
    ball.velocityX  = -6;
  }
  if(keyDown("RIGHT_ARROW"))
  {
    ball.velocityX  = 6;
  }
  if(keyDown("UP_ARROW"))
  {
    ball.velocityY  = -6;
  }
  if(keyDown("DOWN_ARROW"))
  {
    ball.velocityY = 6;
  }
}