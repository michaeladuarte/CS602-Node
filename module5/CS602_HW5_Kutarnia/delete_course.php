<?php
require_once('database.php');

// Get IDs
$course_id = filter_input(INPUT_POST, 'courseID');

// Delete the course from the database
if ($course_id != false) {
    $query = 'DELETE FROM sk_courses
              WHERE courseID = :course_id';
    $statement = $db->prepare($query);
    $statement->bindValue(':course_id', $course_id);
    $success = $statement->execute();
    $statement->closeCursor();    
}

// Display the course List page
include('index.php');