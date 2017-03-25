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

//if(navigator.userAgent.match(/Android/i)){
  //  window.scrollTo(0,1);
 //}
/*

	$('#reader').videoElement.requestFullscreen();
		
		var x = document.getElementById("demo");
		function getLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(showPosition);
			} else {
				x.innerHTML = "Geolocation is not supported by this browser.";
			}
		}
		function showPosition(position) {
			x.innerHTML = "Latitude: " + position.coords.latitude + 
			"<br>Longitude: " + position.coords.longitude; 
		}
		
		
		document.getElementById("demo").addEventListener('mousedown', function (event) {
			getLocation();
		});
		
		
	
	*/
	
	
