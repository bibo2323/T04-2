// This runs once the page has fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // ---- 1. Highlight the current page in the nav menu ----
  // Get the filename of the current page, e.g. "index" or "televisions"
  var path = window.location.pathname;
  var page = path.split("/").pop().replace(".html", "");
  if (page === "") {
    page = "index"; // fallback if the URL has no filename
  }

  // Find all the nav links
  var links = document.querySelectorAll(".nav-link");

  // Loop through them, and if a link's data-page matches
  // the current page, add the "active" class to it
  links.forEach(function (link) {
    if (link.dataset.page === page) {
      link.classList.add("active");
    }
  });

  // ---- 2. Put the current year in the footer ----
  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});