document.addEventListener("DOMContentLoaded", function() {
  var hamburgerIcon = document.querySelector(".fa-bars");
  var dropdownContent = document.querySelector(".dropdown-content");

  hamburgerIcon.addEventListener("click", function(event) {
    event.stopPropagation();
    dropdownContent.classList.toggle("show");
  });

  document.addEventListener("click", function(event) {
    if (
      !dropdownContent.contains(event.target) &&
      !hamburgerIcon.contains(event.target)
    ) {
      dropdownContent.classList.remove("show");
    }
  });
});
