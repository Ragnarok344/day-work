
// Display current date
$(function () {
  for (var i = 9; i < 18; i++) {
    $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
  }
  
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  // Display current time
  setInterval(function () {
    $("#currentTime").text(moment().format("h:mm:ss A"));
  }, 1000);

  $(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    if (text.trim() === '') {
      alert("Please enter a task description");
      return;
    }

    if (text.length > 100) {
      alert("Task description is too long");
      return;
    }

    localStorage.setItem(hour, text);
    $(this).siblings(".description").val(localStorage.getItem(hour));
  });
});


