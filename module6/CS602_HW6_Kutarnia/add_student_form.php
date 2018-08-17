<?php
require('database.php');
$query = 'SELECT *
          FROM sk_courses
          ORDER BY courseID';
$statement = $db->prepare($query);
$statement->execute();
$courses = $statement->fetchAll();
$statement->closeCursor();

// Get IDs
$course_id = filter_input(INPUT_GET, 'courseID');

?>
<!DOCTYPE html>
<html>

<!-- the head section -->
<head>
    <title>My Course Manager</title>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min.js" integrity="sha384-pjaaA8dDz/5BgdFUPX6M/9SUZv4d12SUPF0axWc+VRZkx5xU3daN+lYb49+Ax+Tl" crossorigin="anonymous"></script>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="main.css">
</head>

<!-- the body section -->
<body>
    <header><h1>Course Manager</h1></header>

    <main>
        <h1>Add Student</h1>
        <form action="add_student.php" method="post"
              id="add_student_form">

            <label>Course:</label>
            <select name="course_id">
            <?php foreach ($courses as $course) : ?>
            <!-->if this is the course that was clicked, set as selected -->
                <option <?php if($course_id == $course['courseID']){echo 'selected';};?> 
                     value="<?php echo $course['courseID']; ?>">
                    <?php echo $course['courseID'].'-'.$course['courseName']; ?>
                </option>
            <?php endforeach; ?>
            </select><br>

            <label>First Name:</label>
            <input type="text" name="firstName"><br>

            <label>Last Name:</label>
            <input type="text" name="lastName"><br>

            <label>Email:</label>
            <input type="text" name="email"><br>

            <label>&nbsp;</label>
            <input type="submit" class="btn btn-primary" value="Add Student"><br>
        </form>
        <p><a href="index.php">View Student List</a></p>
    </main>

    <footer>
        <p>&copy; <?php echo date("Y"); ?> Eric Kutarnia</p>
    </footer>
</body>
</html>