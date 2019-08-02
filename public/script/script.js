$(document).ready(function(){
	var slideIndex = 0;
	showSlides();
	function showSlides(){	
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";  
		}
		slideIndex++;
		if (slideIndex > slides.length) {slideIndex = 1}    
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			}
			slides[slideIndex-1].style.display = "block";  
			dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
$("#menu").click(function(){
	$(".navi_menu").slideDown();
	$(".navigator").css("background-color", "#111010");
	$(".navigator").css("height", "200px");
	$("#x").slideDown();
	$("#menu").hide();
	$("#name").hide();
});
$("#x").click(function(){
	$(".navi_menu").hide();
	$("#menu").show();
	$("#name").show();
	$("#x").hide();
	$(".navigator").css("background-color", "white");
	$(".navigator").css("height", "50px");
	$("#menu").css("color", "#111010");
});
});
