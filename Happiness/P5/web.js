let canvas;
let startGame = false;
let endGame = false;

let logo;
let instruction;
let instruction2;
let startButton;


let news1;
let news2;
let news3;
let news4;
let news5;
let news6;
let news7;
let news8;
let news9;
let news10;

let likeReactButton;
let sadReactButton;
let angryReactButton;
let laughReactButton;
let loveReactButton;

let text1;
let text2 = 'Fitness trainer leads neighbors in group workout during coronavirus lockdown';
let text3 = 'Socialism detractors natter on about long lines, but undercapitalism, we wait around endlessly';
let text4 = 'Marnie, Shih Tzu Who Charmed Instagram With Her Lolling Tongue, Dies at 18';
let text5 = 'President Trump Acquitted of Both Impeachment Charges';
let text6;
let text7;
let text8;
let text9;
let text10;
// let new1Button;
// let new2Button;
// let new3Button;
// let newsPage1;
// let newsPage2;
// let newsPage3;
// let new4Button;
// let new5Button;
// let new6Button;
// let newsPage4;
// let newsPage5;
// let newsPage6;

let image1;


var counter = 0;
var timeleft = 60;
var timer;

let message;
let messagebody;
let messageend;
let response;


let cong;
let link;
let ending;

var score = 0;
let scoreText;

function convertSeconds(s) {
  var min = floor(s / 60);
  var sec = s % 60;
  return nf(min,2) + ':' + nf(sec,2);
}

function preload(){
//   news1 = loadImage("Images/news1.jpeg");
// // image1 = createElement(loadImage("Images/news1.jpeg"));
//
//   news2 = loadImage("Images/news2.jpeg");
//   news3 = loadImage("Images/news3.jpeg");
//   news4 = loadImage("Images/news4.jpeg");
//   // news5 = loadImage("Images/newsPage5.jpeg");

cong = loadImage("Images/fire.gif");
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  canvas.position(0, 0);
  background(220);

  logo = createP('<font face="Arial" color="white" font size="4" font-weight: "bold">Your Timeline</font>');
  logo.position(10, 10);

  instruction = createP('<font color = "white">Welcome to your timeline! Please react to 10 articles in your limited lunch time to generate dopamine release </font>')
  instruction.position(250, 10);
  startButton = createButton('<font color="white" font size="3">Start Scrolling</font>');
  startButton.position((windowWidth/2)-20, 320);
  startButton.style('background','blue');
  startButton.mousePressed(timeline);

  scoreText = createP('');
  scoreText.html('REACTS:' + score);
  scoreText.position(10,windowHeight-100);
  scoreText.hide();

  news1 = createImg("Images/news1.jpeg","image not loading :(");
  news2 = createImg("Images/news2.jpeg","image not loading :(");
  news3 = createImg("Images/news3.jpeg","image not loading :(");
  news4 = createImg("Images/news4.jpeg","image not loading :(");
  news5 = createImg("Images/news5.jpeg","image not loading :(");
  news6 = createImg("Images/news6.jpg","image not loading :(");
  news7 = createImg("Images/news7.jpeg","image not loading :(");
  news8 = createImg("Images/news8.jpeg","image not loading :(");
  news9 = createImg("Images/news9.jpeg","image not loading :(");
  news10 = createImg("Images/news10.jpeg","image not loading :(");

  news1.size(540,281);
  news3.size(540,281);
  news4.size(500,300);
  news5.size(540,310);
  news6.size(540,281);
  news7.size(540,281);
  news8.size(540,281);
  news9.size(540,281);
  news10.size(540,281);

  news1.position((windowWidth/2)-200, 200);
  news2.position((windowWidth/2)-200, 200);
  news3.position((windowWidth/2)-200, 200);
  news4.position((windowWidth/2)-200, 200);
  news5.position((windowWidth/2)-200, 200);
  news6.position((windowWidth/2)-200, 200);
  news7.position((windowWidth/2)-200, 200);
  news8.position((windowWidth/2)-200, 200);
  news9.position((windowWidth/2)-200, 200);
  news10.position((windowWidth/2)-200, 200);

  news1.hide();
  news2.hide();
  news3.hide();
  news4.hide();
  news5.hide();
  news6.hide();
  news7.hide();
  news8.hide();
  news9.hide();
  news10.hide();

  textSize(14);
  text1 = createP('<font face= "Arial" font size = "3" color = "#696969">Egg McMuffin rat is the newst fast food rodent star in New York</font>');
  text1.position((windowWidth/2)-200, 500);
  text1.hide();
  text2 = createP('<font face= "Arial" font size = "3" color = "#696969">Fitness trainer leads neighbors in group workout during coronavirus lockdown</font>');
  text2.position((windowWidth/2)-200, 500);
  text2.hide();
  text3 = createP('<font face= "Arial" font size = "3" color = "#696969">Socialism detractors natter on about long lines, but undercapitalism, we wait around endlessly</font>');
  text3.position((windowWidth/2)-200, 500);
  text3.hide();
  text4 = createP('<font face= "Arial" font size = "3" color = "#696969">Marnie, Shih Tzu Who Charmed Instagram With Her Lolling Tongue, Dies at 18</font>');
  text4.position((windowWidth/2)-200, 500);
  text4.hide();
  text5 = createP('<font face= "Arial" font size = "3" color = "#696969">President Trump Acquitted of Both Impeachment Charges</font>');
  text5.position((windowWidth/2)-200, 500);
  text5.hide();
  text6 = createP('<font face= "Arial" font size = "3" color = "#696969">Dear Therapist: My wife is pregnant with a child neither of us wants</font>',400,100);
  text6.position((windowWidth/2)-200, 500);
  text6.hide();
  text7 = createP('<font face= "Arial" font size = "3" color = "#696969">Fake Eames Chairs, extra legroom, $40 candles: OMG this is so...Premiocre</font>',400,100);
  text7.position((windowWidth/2)-200, 500);
  text7.hide();
  text8 = createP('<font face= "Arial" font size = "3" color = "#696969">Domesticated felines are one of the biggest threats to birds worldwide!</font>',400,100);
  text8.position((windowWidth/2)-200, 500);
  text8.hide();
  text9 = createP('<font face= "Arial" font size = "3" color = "#696969">19 First-Time Stories from People Who Waited Until Marriage</font>',400,100);
  text9.position((windowWidth/2)-200, 500);
  text9.hide();
  text10 = createP('<font face= "Arial" font size = "3" color = "#696969">Arnold Schwarzenegger Made Incredible Coronavirus PSA With His Mini Donkey And Mini Horse</font>',400,100);
  text10.position((windowWidth/2)-200, 500);
  text10.hide();

}

function timeline(){
  scoreText.show();
  startGame = true;
  startButton.hide();
  likeReactButton = createImg("Images/like.png","like");
  likeReactButton.position((windowWidth/2)-200,600);
  likeReactButton.size(30,30);
  likeReactButton.mousePressed(timeline2);

  sadReactButton = createImg("Images/sad.png","sad");
  sadReactButton.position((windowWidth/2)-160,600);
  sadReactButton.size(30,30);
  sadReactButton.mousePressed(timeline2);

  loveReactButton = createImg("Images/love.png","heart");
  loveReactButton.position((windowWidth/2)-120,600);
  loveReactButton.size(30,30);
  loveReactButton.mousePressed(timeline2);

  angryReactButton = createImg("Images/angry.png","");
  angryReactButton.position((windowWidth/2)-80,600);
  angryReactButton.size(30,30);
  angryReactButton.mousePressed(timeline2);

  laughReactButton = createImg("Images/laugh.png","laugh");
  laughReactButton.position((windowWidth/2)-40,600);
  laughReactButton.size(30,30);
  laughReactButton.mousePressed(timeline2);
  // sadReactButton  ==
  // let heartReactButton;
  news1.show();
  text1.show();

  // bgm.play();

   var timer = select('#timer');
   timer.html(convertSeconds(timeleft - counter));
   timer.position(windowWidth-100,10);
   timer.style('color','white');
   var interval = setInterval(timeIt, 1000);

   function timeIt(){
     counter++;
     timer.html(convertSeconds(timeleft - counter));
     if (counter == timeleft){
       clearInterval(interval);
       counter = 0;
       }
     }

   }

function timeline2(){
  news1.hide();
  text1.hide();
  news2.show();
  text2.show();
  score ++;
  scoreText.html('REACTS:' + score);
  likeReactButton.mousePressed(timeline3);
  laughReactButton.mousePressed(timeline3);
  loveReactButton.mousePressed(timeline3);
  sadReactButton.mousePressed(timeline3);
  angryReactButton.mousePressed(timeline3);

}

function timeline3(){
  news2.hide();
  text2.hide();
  news3.show();
  text3.show();
  score ++;
  scoreText.html('REACTS:' + score);
  likeReactButton.mousePressed(timeline4);
  laughReactButton.mousePressed(timeline4);
  loveReactButton.mousePressed(timeline4);
  sadReactButton.mousePressed(timeline4);
  angryReactButton.mousePressed(timeline4);
}

function timeline4(){
  news3.hide();
  text3.hide();
  news4.show();
  text4.show();
  score ++;
  scoreText.html('REACTS:' + score);
  likeReactButton.mousePressed(timeline5);
  laughReactButton.mousePressed(timeline5);
  loveReactButton.mousePressed(timeline5);
  sadReactButton.mousePressed(timeline5);
  angryReactButton.mousePressed(timeline5);
}

function timeline5(){
  news4.hide();
  text4.hide();
  news5.show();
  text5.show();
  score ++;
  scoreText.html('REACTS:' + score);
  likeReactButton.mousePressed(timeline6);
  laughReactButton.mousePressed(timeline6);
  loveReactButton.mousePressed(timeline6);
  sadReactButton.mousePressed(timeline6);
  angryReactButton.mousePressed(timeline6);
}

function timeline6(){
  news5.hide();
  text5.hide();
  news6.show();
  text6.show();
  score ++;
  scoreText.html('REACTS:' + score);
  likeReactButton.mousePressed(timeline7);
  laughReactButton.mousePressed(timeline7);
  loveReactButton.mousePressed(timeline7);
  sadReactButton.mousePressed(timeline7);
  angryReactButton.mousePressed(timeline7);
}
function timeline7(){
  news6.hide();
  text6.hide();
  news7.show();
  text7.show();
  score ++;
  scoreText.html('REACTS:' + score);
  likeReactButton.mousePressed(timeline8);
  laughReactButton.mousePressed(timeline8);
  loveReactButton.mousePressed(timeline8);
  sadReactButton.mousePressed(timeline8);
  angryReactButton.mousePressed(timeline8);
}

function timeline8(){
  news7.hide();
  text7.hide();
  news8.show();
  text8.show();
  score ++;
  scoreText.html('REACTS:' + score);
  likeReactButton.mousePressed(timeline9);
  laughReactButton.mousePressed(timeline9);
  loveReactButton.mousePressed(timeline9);
  sadReactButton.mousePressed(timeline9);
  angryReactButton.mousePressed(timeline9);
}

function timeline9(){
  news8.hide();
  text8.hide();
  news9.show();
  text9.show();
  score ++;
  scoreText.html('REACTS:' + score);
  likeReactButton.mousePressed(timeline10);
  laughReactButton.mousePressed(timeline10);
  loveReactButton.mousePressed(timeline10);
  sadReactButton.mousePressed(timeline10);
  angryReactButton.mousePressed(timeline10);
}

function timeline10(){
  news9.hide();
  text9.hide();
  news10.show();
  text10.show();
  score ++;
  scoreText.html('REACTS:' + score);
  likeReactButton.mousePressed(timelineFinal);
  laughReactButton.mousePressed(timelineFinal);
  loveReactButton.mousePressed(timelineFinal);
  sadReactButton.mousePressed(timelineFinal);
  angryReactButton.mousePressed(timelineFinal);
}

function timelineFinal(){
  news10.hide();
  text10.hide();
  score ++;
  scoreText.html('REACTS:' + score);
  likeReactButton.hide();
  laughReactButton.hide();
  loveReactButton.hide();
  sadReactButton.hide();
  angryReactButton.hide();
  scoreText.hide();
  instruction.hide();
  logo.hide();

  ending = createP('<font face="Georgia" color="#87CEEB" font size="5">You have acquired you daily dose of happiness!!</font>');
  ending.position(windowWidth/4,100);
  link = createA("http://susiexyf.github.io/Happiness", "Back to the real world");
  link.position(windowWidth/4,200);

  let sources = createP('<font face="Georgia" color="brown" font size="3.5">Special thanks to the Atlantic, the New York Times, and Buzzfeed for providing titles used here.</font>');
  let sources2 = createP('<font face="Georgia" color="brown" font size="3.5">Check out the actual articles for more dopamine</font>')
  sources.position(windowWidth/4,400);
  sources2.position(windowWidth/4,420);

  endGame = true;
}

function draw(){
  fill(66,103,178);
  stroke(255);
  rect(0,0,windowWidth,50);

//
//   if(startGame === true){
//   background();
//   line(0,150,windowWidth,150);
//   image(mail,windowWidth-200,20,170,120);
// }
//
  if (endGame === true){
    background(240, 128, 128);
    image(cong,80, 150);
    image(cong,3*windowWidth/4, 150);

  }
}
