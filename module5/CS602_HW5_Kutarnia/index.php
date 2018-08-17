<?php
require_once('database.php');

// if course ID is null, get the first record
if (!isset($course_id)) {
    $course_id = filter_input(INPUT_GET, 'course_id');
    if ($course_id == NULL || $course_id == FALSE) {
        $queryCoursesFirst = 'SELECT * FROM `sk_courses` order by courseID asc LIMIT 1';
        $statement = $db->prepare($queryCoursesFirst);
        $statement->execute();
        $course = $statement->fetch();
        $course_name = $course['courseName'];
        $course_id = $course['courseID'];
        $statement->closeCursor();
    }
}
// Get data for current course
$queryCourses = 'SELECT * FROM sk_courses
               WHERE courseID = :course_id';
$statement1 = $db->prepare($queryCourses);
$statement1->bindValue(':course_id', $course_id);
$statement1->execute();
$course = $statement1->fetch();
$course_name = $course['courseName'];
$course_id = $course['courseID'];
$statement1->closeCursor();


// Get all courses
$query = 'SELECT * FROM sk_courses
                       ORDER BY courseID';
$statement = $db->prepare($query);
$statement->execute();
$courses = $statement->fetchAll();
$statement->closeCursor();

// Get students for selected course
$queryStudents = 'SELECT * FROM sk_students
                  WHERE courseID = :course_id
                  ORDER BY courseID';
$statement3 = $db->prepare($queryStudents);
$statement3->bindValue(':course_id', $course_id);
$statement3->execute();
$students = $statement3->fetchAll();
$statement3->closeCursor();
?>
<!DOCTYPE html>
<html>

<!-- the head section -->
<head>
    <title>My Course Manager</title>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min.js" integrity="sha384-pjaaA8dDz/5BgdFUPX6M/9SUZv4d12SUPF0axWc+VRZkx5xU3daN+lYb49+Ax+Tl" crossorigin="anonymous"></script>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="main.css" />
</head> 

<!-- the body section -->
<body>
<header><h1>Course Manager</h1></header>
<main>
    <h1>Student List</h1>

    <aside>
        <!-- display a list of courses -->
        <h2>Courses</h2>
        <nav>
        <ul>
            <?php foreach ($courses as $course) : ?>
            <li><a href="?course_id=<?php echo $course['courseID']; ?>">
                    <?php echo $course['courseID']; ?>
                </a>
                <form style="float : left" action="delete_course.php" method="post">
                    <input type="hidden" id="courseID" name="courseID" value=<?php echo $course['courseID'];?>>
                    <button style="float : left" type="submit" class="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                </form> 
            </li>
            <?php endforeach; ?>
        </ul>
        </nav>          
    </aside>

    <section>
        <!-- display a table of studentss -->
        <h2><?php echo $course_id . '-' .$course_name; ?></h2>
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>&nbsp;</th>
            </tr>
            <?php foreach ($students as $student) : ?>
            <tr>
                <td><?php echo $student['firstName']; ?></td>
                <td><?php echo $student['lastName']; ?></td>
                <td><?php echo $student['email']; ?></td>
                <td><form action="delete_students.php" method="post">
                    <input type="hidden" name="student_id"
                           value="<?php echo $student['studentID']; ?>">
                    <input type="hidden" name="course_id"
                           value="<?php echo $student['courseID']; ?>">
                    <input type="submit" class="btn btn-primary" value="Delete">
                </form></td>
            </tr>
            <?php endforeach; ?>
        </table>
        <!--When clicking add user, pass the courseID so it is automatically selected in the add_student_form-->
        <p><a href="add_student_form.php?courseID=<?php echo $course_id; ?>">Add students</a></p>
        <p><a href="course_list.php">List Courses</a></p>        
    </section>
</main>
<footer>
    <p>&copy; <?php echo date("Y"); ?> Eric Kutarnia</p>
</footer>
</body>
</html>