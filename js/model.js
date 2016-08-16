var Logo = {
	 'program_type' : {'search-all' : 'Search All',
	 				  'scholarship' : 'Scholarship Program',
	 				  'loan' : 'Loan Program'},

	 'education_level' : {'search-all' : 'Search All',
	 					 'kindergarten' : 'Kingdergarten',
	 					 'highschool' : 'HighSchool'},

	 'images':[{'id' : 'aci',
	 			'color' : './images/aci - color.png',
	 			'fade' : './images/aci.png',
	 			'program_type' : 'search-all',
	 			'education_level' : 'search-all'},
	 			{'id' : 'acm',
	 			'color' : './images/acm - color.png',
	 			'fade' : './images/acm - fade copy 2.png',
	 			'program_type' : 'scholarship',
	 			'education_level':'kindergarten'},
				{'id' : 'AFE',
				'color' : './images/AFE color.png',
				'fade' : './images/AFE - fade.png',
				'program_type' : 'loan',
				'education_level' : 'highschool'}
			  ],

	'search' : function(program_type,education_level){
		 
		var result = this.images.filter(function(image){
			var isProgramTypeMatching=false;
			var isEducationLevelMatching=false;
			if(program_type=='search-all'){
				isProgramTypeMatching=true;
			}else{
				isProgramTypeMatching=image.program_type==program_type;
			}
			if(education_level=='search-all'){
				isEducationLevelMatching=true;
			}else{
				isEducationLevelMatching=image.education_level==education_level;
			}
			return isProgramTypeMatching && isEducationLevelMatching ;
		});
		return result;
	}	


};

