noseX=0;
noseY=0;



function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

}





function draw() {
  image(video, 0, 0, 300, 300);
  fill("blue");
  circle(20,20,30);
  circle(280,20,30);
  fill("red");
  rect(10,40,20,220);
  fill("blue");
  circle(20,280,30);
  fill("red");
  rect(40,270,220,20);
  fill("blue");
  circle(280,280,30);
  fill("red");
  rect(270,40,20,220);
  rect(40,10,220,20);

  
}

function take_snapshot(){    
  save('myFilterImage.png');
}
