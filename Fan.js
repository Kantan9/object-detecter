img="";
objects=[];

status="";

function preload()
{
    img=loadImage("Fan.jpg");
}

function setup()
{
    canvas=createCanvas(620,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("results").innerHTML="status:detecting objects";
}

function modelLoaded()
{
    console.log("modelLoded");
    status=true;
    objectDetector.detect(img,gotresults);
}

function gotresults(error,results)
{
  if(error)
  {
      console.log(error);
  }
  console.log(results);
  objects=results;
}

function main()
{
    window.location="index.html"
}

function draw(){
    image(img,0,0,620,420);
}