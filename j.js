
function preload(){

}
function setup(){
canvas=createCanvas(420,420);
canvas.center();
video=createCapture(VIDEO);
video.size(420,420);
video.center();
video.hide();
Classifier=ml5.imageClassifier("MobileNet",H)
}
function H(){
    console.log("LoadModel")
    }
    function draw(){
        image(video,0,0,420,420)
Classifier.classify(video,H2)
       }
    function H2(error,H1){
if(error){
console.log(error);
}
else if(H1){
    console.log(H1);
}
}

