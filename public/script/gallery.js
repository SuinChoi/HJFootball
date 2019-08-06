
// Open the Modal
function openModal(element) {
	document.getElementById("img01").src =element.src;
	document.getElementById("myModal").style.display = "block";
}

	// Close the Modal
	function closeModal() {
		document.getElementById("img01").src = '';
		document.getElementById("myModal").style.display = "none";
		
	}

	