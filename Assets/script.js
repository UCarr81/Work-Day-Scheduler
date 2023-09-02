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
  //

  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});