<?php

/* =========================================
   DATABASE CONNECTION
========================================= */

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rook_chess";
$port = 3306;


/* Create connection */

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

$email = trim($_POST["email"] ?? "");

$mobile = trim($_POST["mobile"] ?? "");

$message = trim($_POST["message"] ?? "");


/* =========================================
   VALIDATION
========================================= */

if (
    $email === "" ||
    $mobile === "" ||
    $message === ""
) {

    echo "
    <script>

        alert('Please fill in all fields.');

        window.history.back();

    </script>
    ";

    exit;

}


/* Validate email */

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

    echo "
    <script>

        alert('Please enter a valid email address.');

        window.history.back();

    </script>
    ";

    exit;

}


/* =========================================
   SAVE CONTACT IN DATABASE
========================================= */

$sql = "INSERT INTO contacts
(
    email,
    mobile,
    message
)
VALUES (?, ?, ?)";


$stmt = $conn->prepare($sql);


if (!$stmt) {

    die(
        "SQL preparation failed: "
        . $conn->error
    );

}


/* Bind values */

$stmt->bind_param(
    "sss",
    $email,
    $mobile,
    $message
);


/* Execute */

if (!$stmt->execute()) {

    echo "
    <script>

        alert('Unable to save your message. Please try again.');

        window.history.back();

    </script>
    ";

    $stmt->close();
    $conn->close();

    exit;

}


/* =========================================
   SEND EMAIL
========================================= */

$receiver_email = "kushpatel070605@gmail.com";


$subject =
    "New Contact Message - The Rook's Chess Academy";


$email_body = "
NEW CONTACT FORM MESSAGE
========================================

Visitor Email:
$email

Mobile Number:
$mobile

Message:
$message

========================================
The Rook's Chess Academy
";


/* Email headers */

$headers =
    "From: The Rook's Chess Academy <noreply@localhost>\r\n";

$headers .=
    "Reply-To: $email\r\n";

$headers .=
    "Content-Type: text/plain; charset=UTF-8\r\n";


/* Send email */

$mail_sent = mail(
    $receiver_email,
    $subject,
    $email_body,
    $headers
);


/* =========================================
   SUCCESS
========================================= */

echo "
<script>

    alert(
        'Thank you! Your message has been submitted successfully.'
    );

    window.location.href =
        'index.html#contact';

</script>
";


/* =========================================
   CLOSE CONNECTION
========================================= */

$stmt->close();

$conn->close();

?>