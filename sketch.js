const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,iron,iron2;
var rubber,rubber2,rubber3,rubber4,rubber5,rubber6,rubber7,rubber8,rubber9;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(250,60,2);
    rubber2 = new Rubber(250,60,2);
    rubber3 = new Rubber(257,60,2);
    rubber4 = new Rubber(266,60,2);
    rubber5 = new Rubber(270,60,2);
    rubber6 = new Rubber(275,60,2);
    rubber7 = new Rubber(280,60,2);
    rubber8 = new Rubber(285,60,2);
    rubber9 = new Rubber(900,300,50)
    iron = new Iron(600,300,100,100);
    iron2 = new Iron(550,300,100,30);
    
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    rubber9.display();
    iron.display();
    iron2.display();


    
 
}