// Requirements:
// At least three different DOM elements
// At least three different “screens” or “scenes”
//


let startGame = false;
let phoneBackground;
let phoneBackground2;
let finger;
let endGame1 = false;
let warning;
let boss;
let endGame2 = false;
let bomb;
let epilogueText = false;
let line2Text;
let backButton;
let otherButton;
let instruction = false;
let instruction2 = false;
let theend;
let endGame3 = false;
let endImage;

function preload(){
  endImage = loadImage("Images/endingImage.png");
  finger = loadImage("Images/finger.png");
  phoneBackground = loadImage("Images/background.png");
  phoneBackground2 = loadImage("Images/background2.jpg");
  boss = loadImage("Images/boss.png");
  bomb = loadImage("Images/bomb.gif");
  // warning = createP("YOU ARE A HORRIBLE EMPLOYEE");
  // warning.hide();
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-2");
  canvas.position(0,0);

  noCursor();
  instruction = createP('<font face="arial" id="instructionP" color="white" font size="6">Do work with all the distractions!</font>');
  instruction.position(windowWidth/2, 100);
  instruction.hide();
  instruction2 = createP('<font face="arial" id="instructionP" color="white" font size="6">Try to click on your work email!</font>');
  instruction2.position(windowWidth/2, 130);
  instruction2.hide();
  canvas.mousePressed(start);

  epilogueText = createP("Congratulations! You are a productive member of society!");
  epilogueText.position(windowWidth/3,200);
  line2Text = createP("You perform your duty as a tax-payer!");
  line2Text.position(windowWidth/3,250);
  line3Text = createP("You ignore your duty as a citizen!");
  line3Text.position(windowWidth/3,300);
  line4Text = createP("You will miss out on tonight's dinner!");
  line4Text.position(windowWidth/3,350);
  line5Text = createP("You will be forever alone!!");
  line5Text.position(windowWidth/3,400);
  backButton = createButton('Continue to waste time');
  backButton.position(500, 500);
  backButton.style('background','coral','font color','white');
  backButton.mousePressed(resetSketch);
  otherButton = createButton('keep on working');
  otherButton.position(800, 500);
  otherButton.style('background','coral','font color','white');
  // backButton.mousePressed(stickyCursor);
  otherButton.mousePressed(ending);

  epilogueText.hide();
  line2Text.hide();
  line3Text.hide();
  line4Text.hide();
  line5Text.hide();
  backButton.hide();
  otherButton.hide();
  }

function start(){
    startGame = true;

  }

function stickyCursor(){
    endGame1 = false;
    // endGame2 = false;
    frameRate(150);
    background(125, 94, 99);
    image(phoneBackground2,0,0, 414, 735);
    instruction.show();
    instruction2.show();
    let cursorX = 100+10*(mouseX - pmouseX);
    let cursorY = 100+12*(mouseY - pmouseY);

    // let cursorX = 100+(mouseX + pmouseX)/2;
    // let cursorY = 100+(mouseY + pmouseY)/2;
    image(finger, cursorX, cursorY, 50, 50);

    if (startGame == true && mouseIsPressed && cursorY < 150){
      endGame1 = true;
    }
    if (startGame == true && mouseIsPressed && cursorY > 360 ){
        endGame1 = true;
    }
    if (mouseIsPressed && cursorY > 150 && cursorY < 360){
        endGame2 = true;
    }
    // backButton.hide();
    // otherButton.hide();

  }
//
//
// function end(){
//   endGame1 = true;
// }

function endscreen1(){
  background(255,0,0);
  image(boss,0,0, windowWidth, windowHeight);
  instruction.hide();
  instruction2.hide();
}

function endscreen2(){
  cursor();
  instruction.hide();
  instruction2.hide();
  image(finger, mouseX, mouseY, 50, 50);
  background(0);
  image(bomb,0, 0, windowWidth, windowHeight);

  epilogueText.show();
  line2Text.show();
  line3Text.show();
  line4Text.show();
  line5Text.show();
  backButton.show();
  otherButton.show();
}

function ending(){
  endGame2 = false;
  endGame3 = true;
  background(0);
  otherButton.hide();
  backButton.hide();

  epilogueText.hide();
  line2Text.hide();
  line3Text.hide();
  line4Text.hide();
  line5Text.hide();

  backButton.hide();
  otherButton.hide();
}

function  resetSketch(){
  startGame = false;
  endGame2 = false;
  backButton.hide();
  otherButton.hide();
  epilogueText.hide();
  line2Text.hide();
  line3Text.hide();
  line4Text.hide();
  line5Text.hide();
  noCursor();
  background(255,255,255);
  image(phoneBackground, 0,0, 414, 735);
  image(finger, mouseX, mouseY, 50, 50);
  canvas.mousePressed(start);
}

function draw(){
    if (startGame == false){
      background(255,255,255);
      image(phoneBackground, 0,0, 414, 735);
      image(finger, mouseX, mouseY, 50, 50);
    } else if(startGame == true){
      stickyCursor();
    }

    if(endGame1 == true){
      endscreen1();
    }

    if (endGame2 == true){
      endscreen2();
    }

    if(endGame3 == true){
      image(endImage,0,0,windowWidth,windowHeight);
      image.style("z-index","1");
      // background(255, 0, 0);
      // // background.style("z-index","0");
      // theend = createP('<font face="arial" color="white">You are a model worker</font>');
      // theend.position(200,500);
    }
}
