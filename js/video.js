// Initialize the video element and turn off autoplay and turn off looping.
var video = document.getElementById('player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	console.log("Auto Play is set to " + video.autoplay);
	video.loop = false;
	console.log("Loop is set to " + video.loop);
	video.load();
});

// Play the video and update the volume information. 
document.getElementById("play").addEventListener("click", function() {
	video.play();
    volumeInfo.textContent = Math.round(video.volume * 100) + '%';
});

//Pause the video 
document.getElementById("pause").addEventListener("click", function() {
	console.log("Pause video");
	video.pause();
});

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console. 
document.getElementById("slower").addEventListener("click", function() {
	console.log("Slowed Down 10%");
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});

// Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again
document.getElementById("faster").addEventListener("click", function() {
	console.log("Speed up 10%");
	video.playbackRate *= 1.1;
	console.log(video.playbackRate);
});

// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
document.getElementById("skip").addEventListener("click", function() {
	if (video.currentTime + 10 < video.duration) {
        video.currentTime += 10;
    } else {
        video.currentTime = 0;
    }
	console.log(`Current video location: ${video.currentTime.toFixed(2)} seconds`);
});

//Mute/unmute the video and update the text in the button.
document.getElementById("mute").addEventListener("click", function() {
	if(document.getElementById("mute").textContent == "Mute"){
		document.getElementById("mute").textContent = "Unmute";
		video.muted = true;
	}
	else{
		document.getElementById("mute").textContent = "Mute";
		video.muted = false;
	}
});

// Change the volume based on the slider and update the volume information.
document.getElementById("slider").addEventListener("change", function() {
	video.volume = document.querySelector("#slider").value / 100; 
	document.querySelector("#volume").innerHTML =  video.volume*100 + "%";
});

//Utilize the existing oldSchool class on the video element
document.getElementById("vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
    console.log('Old School style applied');
});

document.getElementById("orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
    console.log('Old School style removed');
});