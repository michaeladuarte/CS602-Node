var DB = require('./dbConnection.js');
var Course = DB.getModel();

module.exports = 
  function saveCourse(req , res , next){
    var id = req.params.id;

    Course.findById(id, function (err, course){
      if(err)
        console.log("Error Selecting : %s ", err); 
      if (!course)
        return res.render('404');
      
        course.courseNumber = req.body.cnumber
        course.courseName = req.body.cname;
        var developers = req.body.cdev;
        if (developers.length > 0) {
          developers = 
            developers.split(',').map(function (elem){
              var names = elem.trim().split(' ');
              return {firstName: names[0], 
                      lastName: names[1]};
            });
          course.courseDevelopers = developers;
        }
        
        course.save(function (err) {
          if (err)
            console.log("Error updating : %s ",err );
          res.redirect('/courses');
        });
    });
  };
