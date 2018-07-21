var connection = 
	require('./dbConnection.js').dbConnect();

module.exports = 
	function deleteCourse(req , res , next){
    var id = req.params.id;
    connection.query("DELETE FROM met_courses WHERE id = ? ",
      [id], 
    	function(err, rows)
      {
  		  if(err)
              console.log("Error deleting : %s ", err );
        res.redirect('/courses');
      });
  };

  