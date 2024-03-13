/*
 * TODO 4: Create a modularized index.js, 
 * pass in window and createjs
 */
(function (window, createjs) {
  // TODO 5: Initialize CreateJS //
  const canvas = document.getElementById("canvas","smile");
  const stage = new createjs.Stage(canvas,smile);
  // TODO 6: Set the framerate of the Ticker
  createjs.Ticker.framerate = 60;


  /*
   * TODO 7:CREATE AND CONFIGURE ANY DISPLAY 
   * OBJECTS AND ADD THEM TO THE DISPLAY LIST HERE
   */


  // INIT CREATEJS //
  const radius = 25;
  const margin = 125;

const circleContainer = new createjs.Container();
  // CREATE A BACKGROUND //
  const background = new createjs.Shape();
  background.graphics.beginFill("#B2A0D9").drawRect(0, 0, canvas.width, canvas.height);

  // CREATE A CIRCLE //
const circle1 = new createjs.Shape();
const circle2 = new createjs.Shape();
const face = new createjs.Shape();
circle1.graphics.beginFill("#574973").drawCircle(0, 0, radius)
circle2.graphics.beginFill("#7C68A6").drawCircle(0, 0, radius)

circle1.x = radius * 0 + margin;
circle2.x = canvas.width - radius * 2 - margin;
circle1.y = circle2.y = canvas.height / 2;


const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(100, 50, 50, 0, Math.PI);
ctx.stroke();
  // ADD DISPLAY OBJECTS TO STAGE //
  circleContainer.addChild(circle1,circle2);
  stage.addChild(background, circleContainer);
  stage.addChild()


  // TODO 8: Listen to the 'tick' event  //
  let tickHandler = createjs.Ticker.on("tick", onTick);


  // TODO 9: Handle the 'tick' event //
  function onTick(event) {
    update(event);
  }

//variable that track movement
let eyeSpeed = 1;
let bounds = 20;
  /*
   * TODO 10: Implement an update Function, after making 
   * changes to assets, it must call stage.update(); 
   */
  function update(event) {
  circleContainer.x += eyeSpeed;
  if(circleContainer.x > bounds){
    eyeSpeed *= -1;
  }
  if(circleContainer.x < -bounds){
    eyeSpeed *= -1; 
  }
    stage.update();
  }


}(window, window.createjs));
