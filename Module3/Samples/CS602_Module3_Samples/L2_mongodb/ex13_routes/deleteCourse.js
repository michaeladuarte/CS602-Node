var DB = require('./dbConnection.js');
var Course = DB.getModel();

module.exports = 
	function deleteCourse(req , res , next){
    var id = req.params.id;
    
    Course.findById(id, function (err, course){
      if(err)
        console.log("Error Selecting : %s ", err); 
      if (!course)
        return res.render('404');
      
      course.remove(function (err) {
        if (err)
          console.log("Error deleting : %s ",err );
        res.redirect('/courses');
      });        
    });
  };

  