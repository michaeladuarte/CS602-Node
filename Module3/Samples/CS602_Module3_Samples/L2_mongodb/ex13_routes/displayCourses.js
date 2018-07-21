var DB = require('./dbConnection.js');
var Course = DB.getModel();

module.exports = 
	function displayCourses(req , res , next){
    Course.find({}, function(err , courses){
      if(err)
          console.log("Error : %s ",err);

      var results = courses.map(function (course){
      	return {
      		id: course._id,
          courseName: course.courseName,
          courseNumber: course.courseNumber,
          developers:  course.getDeveloperNames()
      	}
      });
      res.render('displayCoursesView',
      	{title:"List of Courses", data:results});
    });
};
