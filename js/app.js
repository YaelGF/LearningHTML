$(document).ready(function(){
	$('select').formSelect();
    $('.datepicker').datepicker({
		format:'dd/mm/yyyy'
	});
});

$(document).on('submit', '#registro', function(e){
	e.preventDefault();
	console.log($(this).serialize());
});