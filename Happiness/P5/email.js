let canvas;
let startButton;
let startGame = false;
let endGame = false;

let intro;
let instruction;
let instruction2;

var counter = 0;
var timeleft = 60;
var timer;

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

let message;
let messagebody;
let messageend;
let response;

let replies = ['Right on it. Please see file attached.', 'Thanks, will do','Let me check in with my colleague and get back to you', 'Thank you for checking in.', 'Can we set up an in-person meeting sometime this week for the matter?'];
let replySelect;
let replyInstruction;
let submit;

let cong;
let link;
let ending;

let button;

// let replyButton;
var score = 0;
let scoreText;

function convertSeconds(s) {
  var min = floor(s / 60);
  var sec = s % 60;
  return nf(min,2) + ':' + nf(sec,2);
}

function preload(){
  cong = loadImage("cong.gif");
  bgm = loadSound('pirate.mp3');
  mail = loadImage('mail.png');
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  canvas.position(0, 0);
  background(220);
  intro = createP('<font face="Courier New" color="#855e42" font size="6">Good Morning! Clearing out your inbox brings a instant sense of achievement!</font>');
  intro.position(150, 10);
  startButton = createButton('Sign in to Gmail');
  startButton.position((windowWidth/2)-20, 320);
  startButton.style('background','coral','font color','white');
  startButton.mousePressed(emailGame);

  scoreText = createP('');
  scoreText.html('email replied:' + score);
  scoreText.position(10,windowHeight-100);
  scoreText.hide();
}

function emailGame(){
  scoreText.show();
  startGame = true;
  startButton.hide();
  intro.hide();
  instruction = createP('<font face="Verdana" font-weight="bold" color="#800000" font size="5">You have 1 minute to answer 10 emails. GO! </font>');

  bgm.play();

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

function failure(){
  button = createButton('TRY AGAIN');
  button.mousePressed(restart2);
}
  //email
  e1Button = createButton('<font face="Arial" color="black" font size="5">[Research Project You Work For] Have you cleaned up the three excel files for this week</font>');
  e1Button.position(0,200);
  e1Button.mousePressed(email1);

}

function email1(){
  e1Button.hide();

  instruction2 = createP('<font face="Georgia" color ="#F08080" font size="3">copy in the following response and *click reply*</font>');
  instruction3 = createP('<font face="Georgia" color ="#F08080" font size="3">if you type in something different or do not click on the button, it will not be counted as an answered email</font>');
  instruction2.position(700, 200);
  instruction3.position(700, 240);
  replySelect = random(replies);
  replyInstruction = createP(replySelect);
  replyInstruction.position(700, 300);

  message = createP('<font face="Arial" color ="black" font size="3">Hello,</font>');
  message.position(10,150);
  messagebody = createP('<font face="Arial" color ="black" font size="3">Can you send me the files you have already sent me twice. Please. Thank you! </font>');
  messagebody.position(30,180);
  messageend = createP('<font face="Arial" color ="black" font size="3">Best,</font>');
  messageend.position(10,210);
  response = createInput('');
  response.position(20,250);
  response.size(400,100);
  response.changed(inbox2Page);

  submit = createButton('reply');
  submit.position(350,380);
  submit.mousePressed(valuecheck);
}
//
function valuecheck (){
  if (response.value() === replySelect){
    score ++;
  }
  scoreText.html('email replied:' + score);
}


function inbox2Page(){
  submit.hide();
  message.hide();
  messageend.hide();
  messagebody.hide();
  response.hide();
  instruction2.hide();
  instruction3.hide();
  replyInstruction.hide();

  e2Button = createButton('<font face="Arial" color="black" font size="5">As per my last email</font>');
  e2Button.position(0,200);
  e2Button.mousePressed(email2);
}

function email2 (){

    e2Button.hide();
    replySelect = random(replies);
    replyInstruction = createP(replySelect);
    replyInstruction.position(700, 300);

    instruction2.show();
    instruction3.show();
    replyInstruction.show();
    message = createP('<font face="Arial" color ="black" font size="3">Greetings,</font>');
    message.position(10,150);
    messagebody = createP('<font face="Arial" color ="black" font size="3">This is an email regarding the last one requiring action, which you ignored, "for later", and then drowned in you inbox</font>');
    messagebody.position(30,180);
    messageend = createP('<font face="Arial" color ="black" font size="3">I am mad but Warm Regards,</font>');
    messageend.position(10,210);
    response = createInput('');
    response.position(20,250);
    response.size(400,100);
    response.changed(inbox3Page);
    submit.show();
}

function inbox3Page(){
  submit.hide();
  message.hide();
  messageend.hide();
  messagebody.hide();
  response.hide();
  instruction2.hide();
  instruction3.hide();
  replyInstruction.hide();

  e3Button = createButton('<font face="Arial" color="black" font size="5">Thanking you for the email you just sent</font>');
  e3Button.position(0,200);
  e3Button.mousePressed(email3);
}

function email3 (){

    e3Button.hide();
    replySelect = random(replies);
    replyInstruction = createP(replySelect);
    replyInstruction.position(700, 300);

    instruction2.show();
    instruction3.show();
    replyInstruction.show();
    message = createP('<font face="Arial" color ="black" font size="3">Dear Sir or Madame,</font>');
    message.position(10,150);
    messagebody = createP('<font face="Arial" color ="black" font size="3">Great! Thank you so much for your response.</font>');
    messagebody.position(30,180);
    messageend = createP('<font face="Arial" color ="black" font size="3">All the best,</font>');
    messageend.position(10,210);
    response = createInput('');
    response.position(20,250);
    response.size(400,100);
    response.changed(inbox4Page);
    submit.show();
}

function inbox4Page(){
  submit.hide();
  message.hide();
  messageend.hide();
  messagebody.hide();
  response.hide();
  instruction2.hide();
  instruction3.hide();
  replyInstruction.hide();

  e4Button = createButton('<font face="Arial" color="black" font size="5">[ACTION NEEDED]~~this is a campaign advertisement~~</font>');
  e4Button.position(0,200);
  e4Button.mousePressed(email4);
}

function email4 (){

    e4Button.hide();
    replySelect = random(replies);
    replyInstruction = createP(replySelect);
    replyInstruction.position(700, 300);

    instruction2.show();
    instruction3.show();
    replyInstruction.show();
    message = createP('<font face="Arial" color ="black" font size="3">Dear Friends,</font>');
    message.position(10,150);
    messagebody = createP('<font face="Arial" color ="black" font size="3">We need you to be part of the movement! Donate today!</font>');
    messagebody.position(30,180);
    messageend = createP('<font face="Arial" color ="black" font size="3">Viva Revolución</font>');
    messageend.position(10,210);
    response = createInput('');
    response.position(20,250);
    response.size(400,100);
    response.changed(inbox5Page);
    submit.show();
}

function inbox5Page(){
  submit.hide();
  message.hide();
  messageend.hide();
  messagebody.hide();
  response.hide();
  instruction2.hide();
  instruction3.hide();
  replyInstruction.hide();

  e5Button = createButton('<font face="Arial" color="black" font size="5">Mildly Interesting But Potential Networking Opportunity </font>');
  e5Button.position(0,200);
  e5Button.mousePressed(email5);
}

function email5 (){

    e5Button.hide();
    replySelect = random(replies);
    replyInstruction = createP(replySelect);
    replyInstruction.position(700, 300);

    instruction2.show();
    instruction3.show();
    replyInstruction.show();
    message = createP('<font face="Arial" color ="black" font size="3">Good afternoon,</font>');
    message.position(10,150);
    messagebody = createP('<font face="Arial" color ="black" font size="3">Since spot is extremely limited, please RSVP by replying to this email.</font>');
    messagebody.position(30,180);
    messageend = createP('<font face="Arial" color ="black" font size="3">Best,</font>');
    messageend.position(10,210);
    response = createInput('');
    response.position(20,250);
    response.size(400,100);
    response.changed(inbox6Page);
    submit.show();
}

function inbox6Page(){
  submit.hide();
  message.hide();
  messageend.hide();
  messagebody.hide();
  response.hide();
  instruction2.hide();
  instruction3.hide();
  replyInstruction.hide();

  e6Button = createButton('<font face="Arial" color="black" font size="5">Broken Paper Copier</font>');
  e6Button.position(0,200);
  e6Button.mousePressed(email6);
}


function email6 (){

    e6Button.hide();
    replySelect = random(replies);
    replyInstruction = createP(replySelect);
    replyInstruction.position(700, 300);

    instruction2.show();
    instruction3.show();
    replyInstruction.show();
    message = createP('<font face="Arial" color ="black" font size="3">Hello</font>');
    message.position(10,150);
    messagebody = createP('<font face="Arial" color ="black" font size="3">The paper copier is on the third floor is broken.</font>');
    messagebody.position(30,180);
    messageend = createP('<font face="Arial" color ="black" font size="3">does anyone know why?</font>');
    messageend.position(10,210);
    response = createInput('');
    response.position(20,250);
    response.size(400,100);
    response.changed(inbox7Page);
    submit.show();
}

function inbox7Page(){
  submit.hide();
  message.hide();
  messageend.hide();
  messagebody.hide();
  response.hide();
  instruction2.hide();
  instruction3.hide();
  replyInstruction.hide();

  e7Button = createButton('<font face="Arial" color="black" font size="5">Presentation Tomorrow</font>');
  e7Button.position(0,200);
  e7Button.mousePressed(email7);
}

function email7 (){

    e7Button.hide();
    replySelect = random(replies);
    replyInstruction = createP(replySelect);
    replyInstruction.position(700, 300);

    instruction2.show();
    instruction3.show();
    replyInstruction.show();
    message = createP('<font face="Arial" color ="black" font size="3">Hi</font>');
    message.position(10,150);
    messagebody = createP('<font face="Arial" color ="black" font size="3">Do you have the power point ready?</font>');
    messagebody.position(30,180);
    messageend = createP('<font face="Arial" color ="black" font size="3">Please share it with us.</font>');
    messageend.position(10,210);
    response = createInput('');
    response.position(20,250);
    response.size(400,100);
    response.changed(inbox8Page);
    submit.show();
}

function inbox8Page(){
  submit.hide();
  message.hide();
  messageend.hide();
  messagebody.hide();
  response.hide();
  instruction2.hide();
  instruction3.hide();
  replyInstruction.hide();

  e8Button = createButton('<font face="Arial" color="black" font size="5">Question about file</font>');
  e8Button.position(0,200);
  e8Button.mousePressed(email8);
}

function email8 (){

    e8Button.hide();
    replySelect = random(replies);
    replyInstruction = createP(replySelect);
    replyInstruction.position(700, 300);

    instruction2.show();
    instruction3.show();
    replyInstruction.show();
    message = createP('<font face="Arial" color ="black" font size="3">Hi</font>');
    message.position(10,150);
    messagebody = createP('<font face="Arial" color ="black" font size="3">Could you explain what you meant by "case-study format" in your instructions?</font>');
    messagebody.position(30,180);
    messageend = createP('<font face="Arial" color ="black" font size="3">Thanks!!!!</font>');
    messageend.position(10,210);
    response = createInput('');
    response.position(20,250);
    response.size(400,100);
    response.changed(inbox9Page);
    submit.show();
}

function inbox9Page(){
  submit.hide();
  message.hide();
  messageend.hide();
  messagebody.hide();
  response.hide();
  instruction2.hide();
  instruction3.hide();
  replyInstruction.hide();

  e9Button = createButton('<font face="Arial" color="black" font size="5">Can you get groceries</font>');
  e9Button.position(0,200);
  e9Button.mousePressed(email9);
}

function email9 (){

    e9Button.hide();
    replySelect = random(replies);
    replyInstruction = createP(replySelect);
    replyInstruction.position(700, 300);

    instruction2.show();
    instruction3.show();
    replyInstruction.show();
    messagebody = createP('<font face="Arial" color ="black" font size="3">on the way home?</font>');
    messagebody.position(30,180);
    messageend = createP('<font face="Arial" color ="black" font size="3">XOXO</font>');
    messageend.position(10,210);
    response = createInput('');
    response.position(20,250);
    response.size(400,100);
    response.changed(inbox10Page);
    submit.show();
}

function inbox10Page(){
  submit.hide();
  messageend.hide();
  messagebody.hide();
  response.hide();
  instruction2.hide();
  instruction3.hide();
  replyInstruction.hide();

  e10Button = createButton('<font face="Arial" color="black" font size="5">New Account Statement Available</font>');
  e10Button.position(0,200);
  e10Button.mousePressed(email10);
}

function email10 (){

    e10Button.hide();
    replySelect = random(replies);
    replyInstruction = createP(replySelect);
    replyInstruction.position(700, 300);

    instruction2.show();
    instruction3.show();
    replyInstruction.show();
    message = createP('<font face="Arial" color ="black" font size="3">Dear respected customer,</font>');
    message.position(10,150);
    messagebody = createP('<font face="Arial" color ="black" font size="3">There is a new letter available for your savings account Title "Insufficient Funds"</font>');
    messagebody.position(30,180);
    messageend = createP('<font face="Arial" color ="black" font size="3">Please contact us immediately if you have any questions.</font>');
    messageend.position(10,210);
    response = createInput('');
    response.position(20,250);
    response.size(400,100);
    if(score === 9 ){response.changed(endPage);
    }
    else if (score < 9) {response.changed(restart);}
    submit.show();
}

function endPage(){

  endGame = true;
  submit.hide();
  message.hide();
  messageend.hide();
  messagebody.hide();
  response.hide();
  instruction.hide();
  instruction2.hide();
  instruction3.hide();
  replyInstruction.hide();
  timer.hide();
  scoreText.hide();

}

function restart(){
  submit.hide();
  message.hide();
  messageend.hide();
  messagebody.hide();
  response.hide();
  instruction2.hide();
  instruction3.hide();
  replyInstruction.hide();
  scoreText.show();

  startGame = true;
  button.hide();

  //email
  e1Button = createButton('<font face="Arial" color="black" font size="5">[Research Project You Work For] Have you cleaned up the three excel files for this week</font>');
  e1Button.position(0,200);
  e1Button.mousePressed(email1);

}

function  restart2(){
  submit.hide();
  message.hide();
  messageend.hide();
  messagebody.hide();
  response.hide();
  instruction2.hide();
  instruction3.hide();
  replyInstruction.hide();
  scoreText.show();

  startGame = true;
  button.hide();

  //email
  e1Button = createButton('<font face="Arial" color="black" font size="5">[Research Project You Work For] Have you cleaned up the three excel files for this week</font>');
  e1Button.position(0,200);
  e1Button.mousePressed(email1);

  counter = 0;
  timeleft = 60;
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
}

function draw(){
  stroke(156, 42,42);
  if(startGame === true){
  background(232, 244, 248);
  line(0,150,windowWidth,150);
  image(mail,windowWidth-200,20,170,120);
}

  if (endGame === true){
    background(240, 128, 128);
    image(cong,windowWidth/2, windowHeight/2);
    ending = createP('<font face="Georgia" color="#87CEEB" font size="5">You have acquired your daily does of the feeling of achievement :)</font>');
    ending.position(100,100);
    link = createA("http://susiexyf.github.io/Happiness", "Back to the real world");
    link.position(100,200);
  }
}
