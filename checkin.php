<?php
// Include database connection settings
require_once("dbconfig.php"); // Create this file with database connection details

// Get form data
$name = $_POST['name'];
$contact = $_POST['contact'];
$email = $_POST['email'];

// // Create an SQL query to select data from Table A
// $selectQuery = "SELECT * FROM register_fss2023 WHERE name = '$name' AND contact = '$contact'";
// echo $selectQuery;

// // Execute the SELECT query
// $result = mysqli_query($conn, $selectQuery);

// // Check for errors
// if (!$result) {
//     die("Error: " . mysqli_error($conn));
// }

// SQL query to insert data into the database
$sql = "UPDATE attendance_fss2023 arrival_time = CURRENT_TIMESTAMP WHERE name = '$name' AND contact = '$contact'";

// Perform the queryx
if (mysqli_query($conn, $sql)) {
    echo "Data updated successfully!";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Close the database connection
mysqli_close($conn);
?>
