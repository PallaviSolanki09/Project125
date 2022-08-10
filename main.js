leftWrist="";
rightWrist="";
defference="";
nose_x="";
nose_y="";

function setup(){
    video=createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(800,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modalloaded);
    poseNet.on('pose',gotposes);
}

function draw(){
    background("#98b2e6");
    fill("black");
    text('PALLAVI',nose_x,nose_y);
    textSize(defference);
}

function modalloaded(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        leftWrist=results[0].pose.leftWrist.x;
        rightWrist=results[0].pose.rightWrist.x;
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        defference=floor(leftWrist-rightWrist);
    }
}