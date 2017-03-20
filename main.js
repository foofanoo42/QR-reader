$(document).ready(function(){
	$('#reader').html5_qrcode(function(data){
			$('#read').html(data);
		},
		function(error){
			$('#read_error').html(error);
		}, function(videoError){
			$('#vid_error').html(videoError);
		}
	);
});

if(navigator.userAgent.match(/Android/i)){
    window.scrollTo(0,1);
 }
var videoElement = document.getElementById("html5_qrcode_video");
videoElement.requestFullscreen();
