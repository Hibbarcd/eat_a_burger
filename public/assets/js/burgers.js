$(function() {
    $(".change-status").on("click", function(event) {
      var id = $(this).data("id");
      var newStatus = $(this).data("newstatus");
  
      var newStatusState = {
        hungry: newStatus
      };
  
// ==========PUT request====================================
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newStatusState
      }).then(
        function() {
          console.log("changed status to", newStatus);
          location.reload();
        }
      );
    });
//============Create New Burger Form ============================  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        hungry: $("[name=status]:checked").val().trim()
      };
  
// =========POST request========================================
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });
  