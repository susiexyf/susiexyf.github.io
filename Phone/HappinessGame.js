let canvas;
let startButton;
let startGame = false;
let startLunch = false;
let startTinder = false;
let inboxPage;
let happyNumber = 0;
let exhautionNumber = 0;
let e1Button;
let e2Button;
let e3Button;
let e4Button;
let e5Button;
let e1Page;
let e2Page;
let e3Page;
let e4Page;
let e5Page;
let backToEmailButton;
let inbox2Page;
let e6Button;
let e7Button;
let e6Page;
let e7Page;
let inbox3page;
let e8Button;
let e9Button;
let e10Button;
let e8Page;
let e9Page;
let e10Page;
let emailEndPage;
let lunchPage;
let new1Button;
let new2Button;
let new3Button;
let newsPage1;
let newsPage2;
let newsPage3;
let new4Button;
let new5Button;
let new6Button;
let newsPage4;
let newsPage5;
let newsPage6;

function preload(){

}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  canvas.position(0, 0);
  let intro = createP('<font face="Courier New" color="#855e42" font size="6">Good Morning! Coffee time is best email correspondence time!</font>');
  intro.position(150, 250);
  startButton = createButton('Sign in to Gmail');
  startButton.position(680, 320);
  startButton.style('background','coral','font color','white');
  startButton.mousePressed(emailGame);
}

function emailGame(){
  background(220);
  startGame = true;
  // intro.hide();
  startButton.hide();
  e1Button = createButton('<font face="Arial" color="black" font size="5">[Research Project You Work For] Have You Cleaned Up 1995 Shapefile Data</font>');
  e1Button.position(0,200);
}

function draw(){
}
