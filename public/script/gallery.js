
// Open the Modal
function openModal(img) {
	document.getElementById("Pic").src = img.getAttribute('src');
	document.getElementById("myModal").style.display = "block";
}

	// Close the Modal
	function closeModal() {
		document.getElementById("myModal").style.display = "none";
	}

	