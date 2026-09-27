<?php

/* =========================================
   DATABASE CONNECTION
========================================= */

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rook_chess";
$port = 3306;

$conn = new mysqli(
    $servername,
    $username,
    $password,
    $dbname,
    $port
);


/* Check connection */

if ($conn->connect_error) {

    die(
        "Database connection failed: "
        . $conn->connect_error
    );

}


/* =========================================
   GET FORM DATA
========================================= */

$course_level =
    trim($_POST["course_level"] ?? "");

$student_name =
    trim($_POST["student_name"] ?? "");

$age =
    trim($_POST["age"] ?? "");

$gender =
    trim($_POST["gender"] ?? "");

$parent_name =
    trim($_POST["parent_name"] ?? "");

$parent_phone =
    trim($_POST["parent_phone"] ?? "");

$email =
    trim($_POST["email"] ?? "");

$address =
    trim($_POST["address"] ?? "");

$preferred_date =
    trim($_POST["preferred_date"] ?? "");

$preferred_time =
    trim($_POST["preferred_time"] ?? "");

$chess_experience =
    trim($_POST["chess_experience"] ?? "");

$message =
    trim($_POST["message"] ?? "");


/* =========================================
   BASIC VALIDATION
========================================= */

if (
    $course_level === "" ||
    $student_name === "" ||
    $age === "" ||
    $gender === "" ||
    $parent_name === "" ||
    $parent_phone === "" ||
    $email === "" ||
    $preferred_date === "" ||
    $preferred_time === ""
) {

    echo "
    <script>

        alert(
            'Please fill in all required fields.'
        );

        window.history.back();

    </script>
    ";

    exit;

}


/* =========================================
   INSERT INTO MYSQL
========================================= */

$sql = "INSERT INTO enrollments
(
    course_level,
    student_name,
    age,
    gender,
    parent_name,
    parent_phone,
    email,
    address,
    preferred_date,
    preferred_time,
    chess_experience,
    message
)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";


$stmt = $conn->prepare($sql);


if (!$stmt) {

    die(
        "SQL preparation failed: "
        . $conn->error
    );

}


/* Bind values */

$stmt->bind_param(
    "ssisssssssss",
    $course_level,
    $student_name,
    $age,
    $gender,
    $parent_name,
    $parent_phone,
    $email,
    $address,
    $preferred_date,
    $preferred_time,
    $chess_experience,
    $message
);


/* =========================================
   EXECUTE DATABASE INSERT
========================================= */

if ($stmt->execute()) {


    /* =====================================
       SEND EMAIL NOTIFICATION
    ===================================== */

    $receiver_email =
        "kushpatel070605@gmail.com";


    $subject =
        "New Course Enrollment - The Rook's Chess Academy";


    $email_body = "
NEW COURSE ENROLLMENT
========================================

Course Level:
$course_level

Student Name:
$student_name

Age:
$age

Gender:
$gender

Parent / Guardian Name:
$parent_name

Parent / Guardian Phone:
$parent_phone

Student Email:
$email

Address:
$address

Preferred Date:
$preferred_date

Preferred Time:
$preferred_time

Previous Chess Experience:
$chess_experience

Additional Message:
$message

========================================
The Rook's Chess Academy
";


    $headers =
        "From: The Rook's Chess Academy <noreply@localhost>\r\n";

    $headers .=
        "Reply-To: $email\r\n";

    $headers .=
        "Content-Type: text/plain; charset=UTF-8\r\n";


    /* Send email */

    mail(
        $receiver_email,
        $subject,
        $email_body,
        $headers
    );


    /* =====================================
       SUCCESS
    ===================================== */

    echo "

    <script>

        alert(
            'Enrollment submitted successfully!'
        );

        window.location.href =
            'index.html#courses';

    </script>

    ";


} else {

    echo "

    <script>

        alert(
            'Error saving enrollment: "
            . addslashes($stmt->error)
            . "'
        );

        window.history.back();

    </script>

    ";

}


/* Close */

$stmt->close();

$conn->close();

?>