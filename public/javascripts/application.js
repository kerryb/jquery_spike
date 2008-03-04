// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

// Make jquery and respond_to play together:
//   http://ozmm.org/posts/jquery_and_respond_to.html
jQuery.ajaxSetup({
  'beforeSend': function(xhr) {xhr.setRequestHeader("Accept", "text/javascript")}
})

// This gets executed once the page has finished loading
$(function() {
	$(".draggable").draggable({helper: 'clone'});
	$("#canvas").droppable({
		accept: ".new_element",
		activeClass: 'droppable-active',
		hoverClass: 'droppable-hover',
		drop: function(ev, ui) {
			var id = prompt("Enter ID for new object");
			jQuery.post("/calls", "id=" + id + "&x=" + ev.pageX + "&y=" + ev.pageY,
				function (data, textStatus) {
				  $("#canvas").append(data);
				});
		}
	});
});