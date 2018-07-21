var connection = 
	require('./dbConnection.js').dbConnect();

module.exports = 
	function displayCourses(req , res , next){
      connection.query('select * from met_courses',
    	function(err , rows){
	        if(err)
	            console.log("Error Selecting : %s ",err);
	        res.render('displayCoursesView',
	        	{title:"List of Courses", data:rows});
    	});
	};
