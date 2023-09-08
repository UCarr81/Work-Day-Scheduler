// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var currentDate = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");
  $("#currentDay").text(currentDate);
  $(".saveBtn").on("click", function() {
    console.log(this);
    var timeBlockId = $(this).parent().attr("id");
    var input = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, input);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  $("#hour09 .description").val(localStorage.getItem("hour09"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
  


  function updateBlockClasses() {
    var currentHour = dayjs().hour();
  
    $(".time-block").each(function () {
      var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
      console.log(hourBlock, currentHour);
  
      $(this).removeClass("past present future");
  
      if (hourBlock < currentHour) {
        $(this).addClass("past");
      } else if (hourBlock === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }
  updateBlockClasses();

  var currentDate = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");
  $("#currentDay").text(currentDate);
});