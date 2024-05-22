function setup(){
    video=createCapture(VIDEO);
    video.size(600, 550);

    canvas=createCanvas(600, 550);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function draw(){
    background('black');
}

function modelLoaded(){
    console.log('posenet model is downloaded')
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}