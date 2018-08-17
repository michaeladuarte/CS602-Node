<?php
// Get the category data
$courseName = filter_input(INPUT_POST, 'courseName');
$ID = filter_input(INPUT_POST, 'ID');

// Validate inputs
if ($courseName == null || $ID == null) {
    $error = "Invalid category data. Check all fields and try again.";
    include('error.php');
} else {
    require_once('database.php');

    // Add the product to the database  
    $query = 'INSERT INTO sk_courses
                 (courseID,courseName)
              VALUES
                 (:ID, :courseName)';
    $statement = $db->prepare($query);
    $statement->bindValue(':courseName', $courseName);
    $statement->bindValue(':ID', $ID);
    $statement->execute();
    $statement->closeCursor();

    // Display the Product List page
    include('course_list.php');
}
?>