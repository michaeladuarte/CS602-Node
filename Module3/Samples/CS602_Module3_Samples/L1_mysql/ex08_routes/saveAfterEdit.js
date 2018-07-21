var connection = 
  require('./dbConnection.js').dbConnect();

module.exports = 
  function saveCourse(req , res , next){
    var id = req.params.id;
    var inputFromForm = {
      course_number  : req.body.cnumber,
      course_name    : req.body.cname
    };
    
    connection.query("UPDATE met_courses set ? WHERE id=?",
      [inputFromForm, id], 
      function(err, rows) {
        if (err)
            console.log("Error inserting : %s ",err );
        res.redirect('/courses');
    });
  };
