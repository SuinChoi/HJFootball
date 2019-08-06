
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