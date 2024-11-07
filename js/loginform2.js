$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    var username = $('input[type="text"]').val();
    var password = $('input[type="password"]').val();
    if (username && password) {
      window.location.href = "website.html";
    } else {
      alert("Invalid username or password");
    }
  });
});
