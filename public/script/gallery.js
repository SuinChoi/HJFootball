$(document).ready(function(){
	putPics();
	function putPics(){	
		console.log('starts');
		var array = ["img/jg1.jpg", "img/hg2.jpg","img/hgg2.jpg","img/jjg1.jpg"];
		for(var i=0; i<array.length; i++){

			var text = '<div class="column">';
			text += '<img src=';
			text += '"' + array[i] + '" ';
			text += 'onclick="openModal(this);" class="hover-shadow"></div>';
			console.log(text);
			$('.row').append(text);

		}
		
	}	
});
// Open the Modal
	function openModal(img) {
		document.getElementById("Pic").src = img.src;
		document.getElementById("myModal").style.display = "block";
	}

	// Close the Modal
	function closeModal() {
		document.getElementById("myModal").style.display = "none";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			document.getElementById("myModal").style.display = "none";
		}
	}