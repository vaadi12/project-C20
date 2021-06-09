var cat,catImg1,catImg2,catImg3,catImg4;
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4;
var backgroundImg;

function preload() {
    //load the images here
    catImg1=loadAnimation("images/cat1.png")
    catImg2=loadAnimation("images/cat2.png","images/cat3.png")
    //catImg3=loadAnimation("images/cat3.png")
    catImg4=loadAnimation("images/cat4.png")
    
    mouseImg1=loadAnimation("images/mouse1.png")
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    //mouseImg3=loadAnimation("images/mouse3.png")
    mouseImg4=loadAnimation("images/mouse4.png")

    backgroundImg=loadImage("images/garden.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
      cat=createSprite(800,680,20,20)
      mouse=createSprite(200,670,20,20)

      mouse.addAnimation("atrest",mouseImg1)
      mouse.scale=0.2
      cat.addAnimation("rest",catImg1)
      cat.scale=0.2


}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
       if(cat.x-mouse.x<(cat.width-mouse.width)/2){
           cat.addAnimation("catlastImage",catImg4)
           cat.changeAnimation("catlastImage")
           mouse.addAnimation("mouselastImg",mouseImg4)
           mouse.changeAnimation("mouselastImg")
           cat.velocityX=0
       }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      cat.velocityX=-5
      cat.addAnimation("catrunning",catImg2)
      cat.changeAnimation("catrunning")
      mouse.addAnimation("teasing",mouseImg2)
      mouse.changeAnimation("teasing")
  }

}
