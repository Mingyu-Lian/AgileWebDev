

//author function in hiding
function toggleSection(sectionId) {
  var details = document.getElementById("section-details" + sectionId);
  var arrow = document.getElementById("arrow" + sectionId);
  if (details.classList.contains("hidden")) {
      details.classList.remove("hidden");
      arrow.textContent = "▲"; // Change arrow direction
  } else {
      details.classList.add("hidden");
      arrow.textContent = "▼"; // Change arrow back
  }
}