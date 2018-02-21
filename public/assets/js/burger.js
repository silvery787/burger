$(function() {
  $(".burger_list").on("click", "button",function(event) {
  // $(".devour_btn").on("click", function(event) {
    var id = $(this).data("id");
    var devouredBurger = { devoured: true };

    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: devouredBurger
    }).then(
      function() {
        console.log("devoured burger id ", id);
        location.reload();
      }
    );
  });

  $(".add-form").on("submit", function(event) {

    event.preventDefault();

    var burger_name = $("#new_burger").val().trim();
    
    if(burger_name){

      $.ajax("/api/burger", {
        type: "POST",
        data: {name: burger_name}
      }).then(
        function() {
          console.log("added new burger");
          location.reload();
        }
      );
    }
    else console.log("Burger needs a name!");
  });
});
