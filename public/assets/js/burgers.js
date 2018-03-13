$(function () {
	//Create a new burger
	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var newBurger = {
			burger_name: $("#burg").val().trim(),
			devoured: false
		};

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


	//'Devour' burger
	$(".eat-burger").on("click", function(event){
		var id = $(this).data("id");

		var devourChange ={
			state: true
		};

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: devourChange
		}).then(
			function(){
				console.log("changed state to true");
				location.reload();
			});

	});
});