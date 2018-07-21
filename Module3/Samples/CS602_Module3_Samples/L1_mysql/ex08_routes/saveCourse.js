var connection = 
  require('./dbConnection.js').dbConnect();

module.exports = 
  function saveCourse(req , res , next){
    
    var inputFromForm = {
      course_number  : req.body.cnumber,
      course_name    : req.body.cname
    };
    connection.query("INSERT INTO met_courses set ? ",
      inputFromForm, 
      function(err, rows)
      {
        if (err)
          console.log("Error inserting : %s ",err );
        res.redirect('/courses');
      });
  };
