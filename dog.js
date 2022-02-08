img ="";
    status = "";
    function preload(){
        img = loadImage("dog_cat.jpg");
    }
    function setup(){
        canvas = createCanvas(650,400);
        canvas.center();
        objectDetector = ml5.objectDetector('cocossd',modelLoaded);
        document.getElementById("status").innerHTML="status: detecting Objects";
    }
    function modelLoaded(){
        console.log("modelLoaded");
        status = true;
        objectDetector.detect(img,gotResult);
    }
    function gotResult(error,results){
        if (error){
        console.log(error);
        }
        console.log(results);
    }
    function draw(){
        image(img,0,0,650,400);
        fill("#006400");
        text("Dog",45,70);
        noFill();
        stroke("#006400");
        rect(30,50,450,340);
    
        fill("#006400");
        text("Cat",320,120);
        noFill();
        stroke("#006400");
        rect(300,80,270,310);
    
        fill("#006400");
        text("Bowl",210,310);
        noFill();
        stroke("#006400");
        rect(250,320,150,100);
    }

