$(document).ready(function(){

	$("#Knof").bind('touchend mousedown', function(){
		$("#prikaz").html($("#besedilo").val());
	});

});