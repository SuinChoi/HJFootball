
// Open the Modal
function openModal(img) {
	console.log(img.getAttribute('src'));
	document.getElementById("Pic").setAttribute('src',img.getAttribute('src'))  ;
	console.log(document.getElementById("Pic").getAttribute('src'));
	document.getElementById("myModal").style.display = "block";
}

	// Close the Modal
	function closeModal() {
		document.getElementById("myModal").style.display = "none";
	}

	