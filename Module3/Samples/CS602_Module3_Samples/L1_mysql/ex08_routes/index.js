var express = require('express');
var router = express.Router();

// other modules
var displayCourses 	= require("./displayCourses");
var addCourse 			= require("./addCourse");
var saveCourse 			= require("./saveCourse");
var editCourse 			= require("./editCourse");
var saveAfterEdit 	= require("./saveAfterEdit");
var deleteCourse 		= require("./deleteCourse");

// router specs
router.get('/', function(req, res, next) {
  res.redirect('/courses');
});

router.get('/courses', 						displayCourses);

router.get('/courses/add', 				addCourse);
router.post('/courses/add', 			saveCourse);

router.get('/courses/edit/:id', 	editCourse);
router.post('/courses/edit/:id', 	saveAfterEdit);

router.get('/courses/delete/:id', deleteCourse);

module.exports = router;
