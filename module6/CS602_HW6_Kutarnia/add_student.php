<?php
// Get the product data
$course_id = filter_input(INPUT_POST, 'course_id');
$email = filter_input(INPUT_POST, 'email');
$firstName = filter_input(INPUT_POST, 'firstName');
$lastName = filter_input(INPUT_POST, 'lastName');
$email = filter_input(INPUT_POST, 'email');
// Validate inputs
if ($course_id == null || $course_id == false ||
        $email == null || $firstName == null || $lastName == null || $email == null) {
    $error = "Invalid product data. Check all fields and try again.";
    include('error.php');
} else {
    require_once('database.php');

    // Add the product to the database  
    $query = 'INSERT INTO sk_students
                 (courseID, email, firstName, lastName)
              VALUES
                 (:course_id, :email, :firstName, :lastName)';
    $statement = $db->prepare($query);
    $statement->bindValue(':course_id', $course_id);
    $statement->bindValue(':email', $email);
    $statement->bindValue(':firstName', $firstName);
    $statement->bindValue(':lastName', $lastName);
    $statement->execute();
    $statement->closeCursor();

    //redirect back to index.php and the correct course
    echo '<script>window.location.href = "index.php?course_id='.$course_id.'";</script>';
}
// Display the Product List page
?>