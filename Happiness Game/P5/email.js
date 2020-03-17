let canvas;
let startButton;
let startGame = false;
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

// let timer = 10;
// let countDownSwitch = false;
let intro;
var counter = 0;
var timeleft = 300;
var timer;

function convertSeconds(s) {
  var min = floor(s / 60);
  var sec = s % 60;
  return nf(min,2) + ':' + nf(sec,2);
}

function preload(){

}

function setup(){
  background(220);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  canvas.position(0, 0);
  intro = createP('<font face="Courier New" color="#855e42" font size="6">Good Morning! Coffee time is best email correspondence time!</font>');
  intro.position(150, 10);
  startButton = createButton('Sign in to Gmail');
  startButton.position(680, 320);
  startButton.style('background','coral','font color','white');
  startButton.mousePressed(emailGame);


}

function emailGame(){
  startGame = true;
  startButton.hide();
  intro.hide();

  //countdown
   var timer = select('#timer');
   timer.html(convertSeconds(timeleft - counter));

   var interval = setInterval(timeIt, 1000);

   function timeIt(){
     counter++;
     timer.html(convertSeconds(timeleft - counter));
     if (counter == timeleft){
       clearInterval(interval);
       counter = 0;
     }
   }

//emails
  e1Button = createButton('<font face="Arial" color="black" font size="5">[Research Project You Work For] Have you cleaned up the three excel files for this week</font>');
  e1Button.position(0,200);
  e1Button.mousePressed(email1);
}

function email1(){

  background("color:white");
  e1Button.hide();
  let message;
  let messagebody;
  let messageend;
  let response;
  message = createP('<font face="Arial" color ="black" font size="3">Hello,</font>');
  message.position(10,150);
  messagebody = createP('<font face="Arial" color ="black" font size="3">Can you send me the files you have already sent me twice. Please. Thank you! </font>');
  messagebody.position(30,180);
  messageend = createP('<font face="Arial" color ="black" font size="3">Best,</font>');
  messageend.position(10,210);
  response = createInput();
  response.position(10,300);
  response.size(200,100);
  let replyButton;
  replyButton = createButton('reply');
  replyButton.position(0,450);
  // replyButton.mousePressed()
  replyButton.mousePressed(email2);
}

function email2 (){

}

function draw(){
  // if (countDownSwitch == true && frameCount % 60 == 0 && timer > 0){
  //   text(timer, 30, 30);
  //   timer--;
  // background("color:white");
// }
  // if(emailreturn == true){
  //
  // }
}
