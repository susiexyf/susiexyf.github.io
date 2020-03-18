let canvas;
let startButton;
let startGame = false;
let endGame = false;

let intro;
let instruction;
let instruction2;

var counter = 0;
var timeleft = 30;
var timer;

let homepage
let profa;
let profb;


let bios = ['Here for a good time, not for a long time', 'World Traveler','Just looking for friends and tacos', 'NUMTOM/Marxist', 'ROTC/Marine Corps','this is what a feminist look like', '6 ft', 'Half European Half American'];
let bioSelect;
let bioText;

let choices = [0,1];
let theirChoice;
let yourChoice;

let p1;
let p2;
let p3;
let p4;
let p5;
let p6;
let p7;
let p8;
let p9;
let p10;
//
// let pp;
// let picSelect;
// let ppImage;

let yes;
let no;

let cong;
let link;

let sorry;
let button;
var score = 0;
let scoreText;

function convertSeconds(s) {
  var min = floor(s / 60);
  var sec = s % 60;
  return nf(min,2) + ':' + nf(sec,2);
}

function preload () {
  bgm = loadSound('romance.mp3');

  // for (var i=0; i<5; i++) {
  //   pp[i] = loadImage("Images/p"+i+".jpg");
  // }
  // pic1 = loadImage("Images/p1.jpg");
  // pic2 = loadImage("Images/p2.jpg");
  // pic3 = loadImage("Images/p3.jpg");

}
function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  canvas.position(0, 0);
  background(220);
  intro = createP('<font face="Lucida Console	"color="white" font size="4">After a long day you are home alone</font>');
  intro.position(630, 200);
  intro2 = createP('<font face="Lucida Console	"color="white" font size="4">Dating Apps help make you feel wanted <3 </font>');
  intro2.position(600,240);
  startButton = createButton('Get Swiping');
  startButton.position((windowWidth/2)-20, 320);
  startButton.style('background','coral','font color','white');
  startButton.mousePressed(tinder);

  instruction = createP('<font face="Lucida Console	"color="white" font size="4">~~ get 5 matches under 30 seconds to recieve necessary vaildation ~~</font>')
  instruction.position(500, windowHeight-40);
  instruction.hide();
  scoreText = createP('');
  scoreText.html('Matches:' + score);
  scoreText.size(4);
  scoreText.position(550,windowHeight-80);
  scoreText.hide();

  p1 = createImg("Images/p1.jpg","image not loading");
  p2 = createImg("Images/p2.jpg","image not loading :(");
  p3 = createImg("Images/p3.jpg","image not loading :(");
  p4 = createImg("Images/p4.png","image not loading :(");
  p5 = createImg("Images/p5.jpeg","image not loading :(");
  p6 = createImg("Images/p6.jpg","image not loading :(");
  p7 = createImg("Images/p7.jpg","image not loading :(");
  p8 = createImg("Images/p8.jpg","image not loading :(");
  p9 = createImg("Images/p9.jpg","image not loading :(");
  p10 = createImg("Images/p10.jpg","image not loading :(");

  p1.size(370,370);
  p2.size(370,370);
  p3.size(370,370);
  p4.size(370,370);
  p5.size(370,370);
  p6.size(370,370);
  p7.size(370,370);
  p8.size(370,370);
  p9.size(370,370);
  p10.size(370,370);

  p1.position(550, 150);
  p2.position(550, 150);
  p3.position(550, 150);
  p4.position(550, 150);
  p5.position(550, 150);
  p6.position(550, 150);
  p7.position(550, 150);
  p8.position(550, 150);
  p9.position(550, 150);
  p10.position(550, 150);

  p1.hide();
  p2.hide();
  p3.hide();
  p4.hide();
  p5.hide();
  p6.hide();
  p7.hide();
  p8.hide();
  p9.hide();
  p10.hide();
}

function tinder (){
  scoreText.show();
  startGame = true;
  startButton.hide();
  intro.hide();
  intro2.hide();
  instruction.show();

  yes = createImg("Images/yes.png","Yes");
  yes.size(40,50);
  yes.position(550,550);

  no = createImg("Images/no.png","no");
  no.size(40,50);
  no.position(600,550);

   var timer = select('#timer');
   timer.html(convertSeconds(timeleft - counter));

   var interval = setInterval(timeIt, 1000);
   timer.position(900,10);
   timer.style('color','white');
   function timeIt(){
     counter++;
     timer.html(convertSeconds(timeleft - counter));
     if (counter == timeleft){
       clearInterval(interval);
       counter = 0;
       if(score < 6){
         failure();
       } if (score >= 6){
         endGame = true;
         yes.hide();
       }
     }
   }

   cong = createP('YOU HAVE A NEW Match!!');
   cong.style('color','white');
   cong.position(680,100);
   cong.hide();

  bgm.play();

   imageMode(CENTER);
   bioSelect = random(bios);
   bioText = createP(bioSelect);
   bioText.position(550, 520);
   bioText.style('font color', 'white');
   p1.show();

   theirChoice = random(choices);
   yes.mousePressed(package1);
   no.mousePressed(tinder2);

 }

 function failure(){
   yes.hide();
   bioText.hide();

   sorry = createP('Sorry, You have failed to get enough matches');
   sorry.position(600,80);
   button = createButton('TRY AGAIN');
   button.position(680,130);
   button.mousePressed(restart2);
 }

function package1(){
  valuecheck();
  tinder2();
}

 function valuecheck (){
   if (theirChoice === 1){
     score ++;
     cong.show();
   }
   scoreText.html('Matches:' + score);
 }

function tinder2 (){
  bioText.hide()
  p1.hide();
  p2.show();
  bioSelect = random(bios);
  bioText = createP(bioSelect);
  bioText.position(550, 520);
  theirChoice = random(choices);

  yes.mousePressed(package2);
  no.mousePressed(tinder3);
  scoreText.html('Matches:' + score);
}

function package2(){
  cong.hide();
  valuecheck();
  tinder3();
}

function tinder3 (){
  bioText.hide()
  p2.hide();
  p3.show();
  bioSelect = random(bios);
  bioText = createP(bioSelect);
  bioText.position(550, 520);
  theirChoice = random(choices);

  yes.mousePressed(package3);
  no.mousePressed(tinder4);

  scoreText.html('Matches:' + score);
}

function package3(){
  cong.hide();
  valuecheck();
  tinder4();
}

function tinder4 (){
  bioText.hide()
  p3.hide();
  p4.show();
  bioSelect = random(bios);
  bioText = createP(bioSelect);
  bioText.position(550, 520);
  theirChoice = random(choices);

  yes.mousePressed(package4);
  no.mousePressed(tinder5);

  scoreText.html('Matches:' + score);
}

function package4(){
  cong.hide();
  valuecheck();
  tinder5();
}

function tinder5 (){
  bioText.hide()
  p4.hide();
  p5.show();
  bioSelect = random(bios);
  bioText = createP(bioSelect);
  bioText.position(550, 520);
  theirChoice = random(choices);

  yes.mousePressed(package5);
  no.mousePressed(tinder6);
  scoreText.html('Matches:' + score);
}


function package5(){
  cong.hide();
  valuecheck();
  tinder6();
}

function tinder6 (){
  bioText.hide()
  p5.hide();
  p6.show();
  bioSelect = random(bios);
  bioText = createP(bioSelect);
  bioText.position(550, 520);
  theirChoice = random(choices);

  yes.mousePressed(package6);
  no.mousePressed(tinder7);

  scoreText.html('Matches:' + score);
}


function package6(){
    cong.hide();
  valuecheck();
  tinder7();
}

function tinder7 (){
  bioText.hide()
  p6.hide();
  p7.show();
  bioSelect = random(bios);
  bioText = createP(bioSelect);
  bioText.position(550, 520);
  theirChoice = random(choices);

  yes.mousePressed(package7);
  no.mousePressed(tinder8);

  scoreText.html('Matches:' + score);
}

function package7(){
    cong.hide();
    valuecheck();
  tinder8();
}

function tinder8 (){
  bioText.hide()
  p7.hide();
  p8.show();
  bioSelect = random(bios);
  bioText = createP(bioSelect);
  bioText.position(550, 520);
  theirChoice = random(choices);

  yes.mousePressed(package8);
  no.mousePressed(tinder9);

  scoreText.html('Matches:' + score);
}

function package8(){
    cong.hide();
    valuecheck();
  tinder9();
}

function tinder9 (){
  bioText.hide()
  p8.hide();
  p9.show();
  bioSelect = random(bios);
  bioText = createP(bioSelect);
  bioText.position(550, 520);
  theirChoice = random(choices);

  yes.mousePressed(package9);
  no.mousePressed(tinder10);

  scoreText.html('Matches:' + score);
}


function package9(){
    cong.hide();
    valuecheck();
  tinder10();
}

function tinder10 (){
  bioText.hide()
  p9.hide();
  p10.show();
  bioSelect = random(bios);
  bioText = createP(bioSelect);
  bioText.position(550, 520);
  theirChoice = random(choices);

  yes.mousePressed(package10);
  no.mousePressed(restart);
  scoreText.html('Matches:' + score);
}

function package10(){
    cong.hide();
    valuecheck();
  restart();
}

function restart (){
  bioText.hide()
  p10.hide();
  p1.show();

   imageMode(CENTER);
   bioSelect = random(bios);
   bioText = createP(bioSelect);
   bioText.position(550, 520);
   bioText.style('font color', 'white');

   yes = createImg("Images/yes.png","Yes");
   yes.size(40,50);
   yes.position(550,550);

   theirChoice = random(choices);
   yes.mousePressed(package1);
   no.mousePressed(tinder2);
}

// function ending(){
//   if (score >= 3)
// }

function restart2 (){
  bgm.stop();
  bgm.play();
  bioText.hide()
  p10.hide();
  sorry.hide();
  button.hide();
  p1.show();
  score = 0;

   counter = 0;
   timeleft = 30;
   var timer = select('#timer');
   timer.html(convertSeconds(timeleft - counter));

   var interval = setInterval(timeIt, 1000);

   function timeIt(){
     counter++;
     timer.html(convertSeconds(timeleft - counter));
     if (counter == timeleft){
       clearInterval(interval);
       counter = 0;
       if(score < 10){
         failure();
       } if (score >= 10){
         endPage();
       }
     }
 }
restart();
}

function endPage(){
  yes.hide();
  endGame = true;
}

function draw (){
  noStroke();
  fill(255, 88, 100);
  rect(500,0,500,windowHeight);
  if (endGame === true){
    fill(240, 128, 128);
    rect(0,0,windowWidth,windowHeight);
    instruction.hide();
    scoreText.hide();
      bioText.hide();
      p1.hide();
      p2.hide();
      p3.hide();
      p4.hide();
      p5.hide();
      p6.hide();
      p7.hide();
      p8.hide();
      p9.hide();
      p10.hide();

      cong.hide();
      no.hide();
      yes.hide();

          ending = createP('<font face="Georgia" color="#87CEEB" font size="5">You have acquired your daily does of the validation :)</font>');
          ending.position(500,100);
          ending2 = createP('<font face="Georgia" color="#87CEEB" font size="5">But are you really happy?</font>');
          ending2.position(500,300);
          link = createA("http://susiexyf.github.io/Happiness", "Back to the real world");
          link.position(windowWidth/2,500);
  }
}
