const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getTime();


    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
   
}

function draw(){
if(backgroundImg){
    background(backgroundImg)
}
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here

}


async function getTime(){
var r=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
var rj= await r.json();

console.log(rj);
var dt=rj.datetime;
console.log(dt);
var hour=dt.slice(11,13);
console.log(hour);
if(hour>06&hour<18){
    bg="sunrise1.png";
}
else{
    bg="sunset12.png";
}
backgroundImg=loadImage(bg);

}
