import "Assets/css/style.css";
import kawetSprite from 'Assets/level1/kawet-sprite.png';




window.onload = window.onresize = function () {
  var canvas = document.getElementById('canvas');
  console.log (canvas);
  canvas.width = document.body.clientWidth; //document.width is obsolete
    canvas.height = document.body.clientHeight; //document.height is obsolete
  console.log(canvas.offsetHeight)


  var img = new Image();
  img.src = kawetSprite;
  img.onload = function () {
    canvas.getContext('2d').drawImage(img, 0, 0, 48, 48, 50, 50, 96, 96);
    canvas.getContext('2d').drawImage(img, 48, 0, 48, 48, 100, 100, 96, 96);
  }
  



}


