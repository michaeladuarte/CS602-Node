<?php
require_once('database.php');

//rest.php?format=format_type&action=students&course=id4
//rest.php?format=json&action=students
//get parms from request
$format_type = filter_input(INPUT_GET, 'format');
$action      = filter_input(INPUT_GET, 'action');
//if the action type is students, get the additional course parm
if ($action == 'students') {
    $course_id = filter_input(INPUT_GET, 'course');
    //if courseid is null, get all students
    if ($course_id == null || $course_id = '') {
        //call function to get all students
        $queryStudents2 = 'SELECT * FROM sk_students';
        $statement30    = $db->prepare($queryStudents2);
        $statement30->execute();
        $students = $statement30->fetchAll(PDO::FETCH_ASSOC);
        $statement30->closeCursor();
        
        //conditional statements for content type   
        if ($format_type == 'xml') {
            //create root students
            $xml = new SimpleXMLElement('<students/>');
            //for each student add child to root xml
            foreach ($students as $val) {
                $member = $xml->addChild('student');
                $member->addChild('studentID', $val['studentID']);
                $member->addChild('courseID', $val['courseID']);
                $member->addChild('firstName', $val['firstName']);
                $member->addChild('lastName', $val['lastName']);
                $member->addChild('email', $val['email']);
            }
            ;
            //set header content type to render as xml
            Header('Content-type: text/xml');
            echo ($xml->asXML());
            
        } else if ($format_type = 'json') {
            Header('Content-type: application/json');
            echo json_encode($students);
        } else {
            echo 'CONTENT TYPE NOT RECOGNIZED';
        }
    } else {
        $course_id = filter_input(INPUT_GET, 'course');
        // Get students for selected course
        $queryStudents = 'SELECT * FROM sk_students t
            WHERE courseID = :course_id
            ORDER BY courseID';
        $statement3    = $db->prepare($queryStudents);
        $statement3->bindValue(':course_id', $course_id);
        $statement3->execute();
        $students = $statement3->fetchAll(PDO::FETCH_ASSOC);
        $statement3->closeCursor();
        
        //conditional statements for content type   
        if ($format_type == 'xml') {
            //create root students
            $xml = new SimpleXMLElement('<students/>');
            //for each student add child to root xml
            foreach ($students as $val) {
                $member = $xml->addChild('student');
                $member->addChild('studentID', $val['studentID']);
                $member->addChild('courseID', $val['courseID']);
                $member->addChild('firstName', $val['firstName']);
                $member->addChild('lastName', $val['lastName']);
                $member->addChild('email', $val['email']);
            }
            ;
            //set header content type to render as xml
            Header('Content-type: text/xml');
            echo ($xml->asXML());
            
        } else if ($format_type = 'json') {
            Header('Content-type: application/json');
            echo json_encode($students);
        } else {
            echo 'CONTENT TYPE NOT RECOGNIZED';
        }
    }
}
;

//rest.php?format=format_type&action=courses
if ($action == 'courses') {
    // Get all courses
    $query     = 'SELECT * FROM sk_courses
                       ORDER BY courseID';
    $statement = $db->prepare($query);
    $statement->execute();
    $courses = $statement->fetchAll(PDO::FETCH_ASSOC);
    $statement->closeCursor();
    if ($format_type == 'xml') {
        //create root students
        $xml = new SimpleXMLElement('<courses/>');
        //for each student add child to root xml
        foreach ($courses as $val) {
            $member = $xml->addChild('course');
            $member->addChild('courseID', $val['courseID']);
            $member->addChild('courseName', $val['courseName']);
        }
        ;
        //set header content type to render as xml
        Header('Content-type: text/xml');
        echo ($xml->asXML());
        
    } else if ($format_type = 'json') {
        Header('Content-type: application/json');
        echo json_encode($courses);
    } else {
        echo 'CONTENT TYPE NOT RECOGNIZED';
    }
};
?>
