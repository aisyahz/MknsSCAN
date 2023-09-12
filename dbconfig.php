<?php
$servername = "whm1007"; // Change to your database server
$username = "username"; // Change to your database username
$password = "password"; // Change to your database password
$dbname = "mknsm32_mkns"; // Change to your database name

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
