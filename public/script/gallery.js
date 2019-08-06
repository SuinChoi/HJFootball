
// Open the Modal
function openModal(img) {
	document.getElementById("Pic").setAttribute('src',img.src);
	document.getElementById("myModal").style.display = "block";
}

	// Close the Modal
	function closeModal() {
		document.getElementById("myModal").style.display = "none";
	}

	