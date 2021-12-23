function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);

    posenet=ml5.poseNet(video, modelloaded);
    posenet.on('pose', GotPoses);
}

function modelloaded(){
    console.log("DREWRG");
}

function GotPoses(result){
    console.log(result);
}