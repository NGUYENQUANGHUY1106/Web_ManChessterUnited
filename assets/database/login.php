<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $db = "login";
  global $connnn ;

  $connnn= mysqli_connect($servername,$username, $password);
  if($conn)
  {
    die('Could not connect: '.mysqli_error($conn));
  }
  mysqli_select_db( $connnn,$db);
?>
