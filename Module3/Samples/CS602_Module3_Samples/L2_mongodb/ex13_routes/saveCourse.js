var DB = require('./dbConnection.js');
var Course = DB.getModel();

module.exports = 
  function saveCourse(req , res , next){
 
    var developers = req.body.cdev;
    // create an array of objects
    if (developers.length > 0) {
      developers = 
        developers.split(',').map(function (elem){
          var names = elem.trim().split(' ');
          return {firstName: names[0], 
                  lastName: names[1]};
        });
    } else
      developers = [];

    var course = new Course({
      courseNumber:     req.body.cnumber,
      courseName:       req.body.cname,
      courseDevelopers: developers
    }); 
 
    course.save(function (err){
      if(err)
        console.log("Error : %s ",err);
      res.redirect('/courses');
    });

  };
