
$(document).ready(function() {
  $("form#profile").submit(function(event) {
    event.preventDefault();
    $("#for-female").hide();
    $("#for-male").hide();
    const gender = $("select#gender").val();

    if (gender == "female") {
      $("#for-female").show();
    } else {
      $("#for-male").show();
    }
  });
});