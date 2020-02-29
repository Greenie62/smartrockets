let population;
let lifespan=400;
let lifeP;
let count=0;
let target;
let maxForce=0.2

//dimensions of barrier
let rx=100;
let ry=150;
let rw=200;
let rh=10


function setup(){
    createCanvas(500,500)
     population=new Population();
    lifeP=createP();
    target=createVector(width/2,50)
}


function draw(){
    background(0)
     population.run()
    
    lifeP.html("Count: " + count);

     count++;
     if(count === lifespan){
        population.evaluate();
        population.selection();

         count=0;
     }

    fill('purple');
    rect(rx,ry,rw,rh);

    fill(258)
    ellipse(target.x,target.y,16,16)
}



