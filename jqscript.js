$(document).ready(function () {
  $(".create").click(function () {
    $(".OTP").text(Math.floor(Math.random() * 100) + 1000); //will give 1 to 100 num when add by 1000 will give in the range (1000 to 1100)
  });
});
