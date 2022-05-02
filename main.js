noseX = 0;
noseY = 0;

function preload(){
Lipstik = loadImage("https://i.postimg.cc/13syk6WN/Lipstik-image.png");
}

function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300 , 300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose" , gotPoses)
}

function draw(){
    image(video , 0 , 0 , 300 , 300);
    image(Lipstik , noseX , noseY , 25 , 25);
}

function take_a_snap(){
    save("FilteredImage(FaceAI)");
}

function modelLoaded(){
    console.log("PoseNet is ready to use!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 13;
        noseY = results[0].pose.nose.y + 10;
        console.log("Nose x: " + noseX);
        console.log("Nose y: " + noseY);
    }
}
