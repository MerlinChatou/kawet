import "Assets/css/style.css";
import kawetSprite from "Assets/level1/kawet-sprite.png";



window.addEventListener("DOMContentLoaded", (event) => {
  
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  // Set the canvas full screen
  canvas.width = document.body.clientWidth; //document.width is obsolete
  canvas.height = document.body.clientHeight; //document.height is obsolete
  


  var img = new Image();
  img.src = kawetSprite;

  let i=0, x=0;
  function draw() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, i*48, 0, 48, 48, x, 50, 128, 128);
    if (++i>11) i=0;
    if (i<7) x+=5;
    
    //ctx.drawImage(img, 48, 0, 48, 48, 100, 100, 96, 96);
    setTimeout(() => { 
      window.requestAnimationFrame(draw);
    }, 100);
  }
  


  window.requestAnimationFrame(draw);
});

