<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myntraclone";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// sql to create table
$sql = "SELECT name,email,is_admin FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
var_dump(json_encode($result->fetch_all(MYSQLI_ASSOC)));
$result->free_result();
} else {
    echo "0 results";
}

$conn->close();
?>
<!-- # Remove the php extension from the filename
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^([^\.]+)$ $1.php [NC,L]

# Set the headers for the restful api
Header always set Access-Control-Allow-Origin http://localhost:4200
Header always set Access-Control-Max-Age "1000"
Header always set Access-Control-Allow-Headers "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding"
Header always set Access-Control-Allow-Methods "POST, GET, OPTIONS, DELETE, PUT" -->