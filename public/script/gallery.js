$(document).ready(function(){
	putPics();
	function putPics(){	
		console.log('starts');
		var array = ["jg1", "hg2","hgg2",
		"hg8","jjg1","hg3",
		"jjg1", "hgg1","jg1",
		"hg1" , "hg9","jjg3"];
		for(var i=0; i<array.length; i++){

			var text = '<div class="column">';
			text += '<img src=';
			text += '"img/' + array[i] + '.jpg" ';
			text += 'onclick="openModal(this);" class="hover-shadow"></div>';
			console.log(text);
			$('.row').append(text);

		}
		
	}	
});
// Open the Modal
function openModal(img) {
	document.getElementById("Pic").src = img.getAttribute('src');
	document.getElementById("myModal").style.display = "block";
}

	// Close the Modal
	function closeModal() {
		document.getElementById("myModal").style.display = "none";
	}

	