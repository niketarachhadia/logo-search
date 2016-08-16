$(document).ready(function() {

	var logo = Object.create(Logo);
	var logoObj = logo;	
	

	var initialImages = function(){
		for(var i=0;i<4;i++){
			for(index in logo.images){
				var img = $('<img>');
				img.addClass(logo.images[index].id);
				img.attr('src',logo.images[index].fade);
				$('#image-grid').append(img);
			}
		}
	};
	initialImages();
	for(key in logo.program_type){
		$('#program-type').append('<option value="'+key+'">'+logo.program_type[key]+'</option>');
	}
	for(key in logo.education_level){
		$('#education-level').append('<option value="'+key+'">'+logo.education_level[key]+'</option>');
	}
	
	$('#search-btn').click(function(){
		reset();
		var programType = $('#program-type').val();
		var educationLevel = $('#education-level').val();
		var resultLogos = logoObj.search(programType,educationLevel);
		for(index in resultLogos){
			var logo=resultLogos[index];
			$('.'+logo.id).attr('src',logo.color);
		}
	});
	var reset = function(event){
		$('#image-grid').empty();
		initialImages();
	};	
});