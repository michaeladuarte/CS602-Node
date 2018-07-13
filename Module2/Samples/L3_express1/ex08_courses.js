var courses = [
 {id: 'cs601', name: 'Web Application Development'},
 {id: 'cs602', name: 'Server-Side Web Development'},
 {id: 'cs701', name: 'Rich Internet Appl Development'}
];

exports.getCourse = function(course_id) {
	for (var i = 0; i < courses.length; i++) {
		if (courses[i].id == course_id) {
			return {id: courses[i].id, name : courses[i].name};
		}
	}
	return {id: course_id, name : 'Unknown'};
};


// return a deep clone
exports.getAllCourses = function() {
	var result = JSON.parse(JSON.stringify(courses));
	return result;
}


exports.addCourse = function(course_id, course_name) {
	for (var i = 0; i < courses.length; i++) {
		if (courses[i].id == course_id) {
			break;
		}
	}
	if (i == courses.length) {
		courses.push({id: course_id, name : course_name});
	};
}

exports.removeCourse = function(course_id) {
	for (var i = 0; i < courses.length; i++) {
		if (courses[i].id == course_id) {
			break;
		}
	};
	if (i != courses.length) {
		courses.splice(i, 1);
	};
}













