// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  $(".saveBtn").on("click", function() {
    var timeBlockId = $(this).parent().attr("id");
    var input = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, input);
  });

  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var userSave = localStorage.getItem(timeBlockId);
    
    if (userSave !== null) {
      $(this).find(".description").val(userSave);
    }
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
    // Get the current hour using Day.js and convert it to a number
    var currentHour = dayjs().hour();
  
    // Iterate through time blocks and apply classes based on their time
    $(".time-block").each(function () {
      var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
      console.log(hourBlock, currentHour);
      if (hourBlock < currentHour) {
        $(this).removeClass("present future").addClass("past");
      } else if (hourBlock === currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }
  updateBlockClasses();

  var currentDate = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");
  $("#currentDay").text(currentDate);
});