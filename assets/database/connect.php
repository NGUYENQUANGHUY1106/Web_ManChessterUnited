<?php
  $servername = "localhost";
  $username = "root";
  $password = "11062005";
  $db = "clothing_shop";
  global $conn;

  $conn = mysqli_connect($servername, $username, $password, $db);

  if (!$conn) {
    die('Could not connect: ' . mysqli_connect_error());
  }
?>
