var connection = 
	require('./dbConnection.js').dbConnect();

module.exports = 
	function editCourse(req , res , next){
        var id = req.params.id;
        connection.query('SELECT * FROM met_courses WHERE id = ?',
          [id],
        	function(err,rows){
        		if(err)
            	   console.log("Error Selecting : %s ", err);      	
        		res.render('editCourseView',
        			{title:"Edit Course", data:rows[0]});
    		});
    };

