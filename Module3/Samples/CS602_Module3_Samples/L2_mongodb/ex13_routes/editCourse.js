var DB = require('./dbConnection.js');
var Course = DB.getModel();

module.exports = 
	function editCourse(req , res , next){
    var id = req.params.id;

    Course.findById(id, function (err, course){
      if(err)
        console.log("Error Selecting : %s ", err); 
      if (!course)
        return res.render('404');
      res.render('editCourseView',
          {title:"Edit Course", 
           data: {id: course._id,
                  courseNumber: course.courseNumber,
                  courseName: course.courseName,
                  developers:  course.getDeveloperNames()}
          });                
    });
};

