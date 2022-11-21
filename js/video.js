// Add js here.
//1.play
var vid = document.getElementById("videoplayer");

var playButton = document.getElementById("play");
playButton.addEventListener("click", function() 
{
    vid.play();
    console.log("playing");
});
// 2.pause
var pauseButton = document.getElementById('pause');
pauseButton.addEventListener("click", function(){
    vid.pause();
    console.log("paused");

});
var slowerbtn = document.getElementById('slower');

document.querySelector("#slower").addEventListener("click", function() {
	if (vid.playbackRate === 0.5) {
		window.alert("Video is at slowest speed!");
	} else if (vid.playbackRate === 1) {
		vid.playbackRate = 0.5;
	} else if (vid.playbackRate === 2) {
		vid.playbackRate = 0.5;
	}
});

document.querySelector("#faster").addEventListener("click", function() {
	if (vid.playbackRate === 0.5) {
		vid.playbackRate = 1;
	} else if (vid.playbackRate === 1) {
		vid.playbackRate = 2;
	} else if (vid.playbackRate === 2) {
		window.alert("Video is at fastest speed!");
	}
});
// //3.slow down
// var slowDownBtn = document.getElementById('slower');
// var rate = vid.playbackRate;
// slowDownBtn.addEventListener("click", function(){
//     console.log("slowing down");
//     if (vid.playbackRate == 0)
//     {
//         vid.pause();
//         console.log("paused");
//     }
//     else{
//         vid.playbackRate -= 0.5;
//     }
//     console.log("slower speed " + vid.playbackRate);

// });

// //4.speed Up
// var speedUpBtn = document.getElementById('faster');
// speedUpBtn.addEventListener("click", function(){
// console.log("slowing down");
// if (vid.playbackRate == 2)
// {
//     vid.pause();
//     console.log("paused");
// }
// else{
//     vid.playbackRate += 0.5;
// }
//     console.log("faster speed", vid.playbackRate);
// });

// 5. skipAhead
var skipAhead = document.getElementById('skip');
skipAhead.addEventListener("click", function(){
    vid.currentTime += 15;
	if (vid.currentTime >= vid.duration){
		vid.currentTime = 0
	} 
    console.log("Video current time is", vid.currentTime);

});

//6. mute
var muteBtn = document.getElementById('mute');
muteBtn.addEventListener("click", function(){
	console.log("muting video")
	if (vid.muted == false) {
		vid.muted = true;
		document.getElementById("mute").innerHTML ='Unmute';
	}
	else {
		vid.muted = false;
		document.getElementById("mute").innerHTML ='Mute';
	}
})

//7. volumn slider 
var slider = document.getElementById('slider');
slider.addEventListener('change', function(){

console.log("sliding");
vid.volume = this.value / 100;
vol = vid.volume * 100;
document.getElementById('volume').innerHTML = vol + "%";



});


