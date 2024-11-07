$(document).ready(function () {
  function loadPage(page) {
    $("#main-content").load(page);
  }

  // Load home.html by default
  loadPage("home.html");

  $("nav a").click(function (e) {
    e.preventDefault();
    var page = $(this).data("page");
    if (page === "home") {
      // Load website.html when clicking on the "Home" link
      loadPage("website.html");
    } else {
      loadPage(page);
    }
  });
});
