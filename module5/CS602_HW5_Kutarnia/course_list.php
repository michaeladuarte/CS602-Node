<?php
require_once('database.php');

// Get all courses
$query = 'SELECT * FROM sk_courses
                       ORDER BY courseID';
$statement = $db->prepare($query);
$statement->execute();
$courses = $statement->fetchAll();
$statement->closeCursor();
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
    <h1>Course List</h1>
    <table>
        <tr><th>ID</th>
        <th>Name</th>        
        <!-- loop over db results and populate table-->
        <?php foreach ($courses as $course) : ?>
            <tr><td><?php echo $course['courseID']; ?></td>
                <td><?php echo $course['courseName']; ?></td>
            </tr>
        <?php endforeach; ?>
    </table>
    <p>
    <h2>Add Course</h2>
    
    <!-- add course -->
    <form action="add_course.php" method="post"
              id="add_course_form">
        <label>Course ID:</label>
        <input type="text" name="ID"><br>
        <label>Course Name:</label>
        <input type="text" name="courseName"><br>
         <p>
        
        <label>&nbsp;</label>
        <input type="submit" class="btn btn-primary" value="Add Course"><br>

    </form>

    <br>
    <p><a href="index.php">List Students</a></p>

    </main>

    <footer>
        <p>&copy; <?php echo date("Y"); ?> Eric Kutarnia</p>
    </footer>
</body>
</html>