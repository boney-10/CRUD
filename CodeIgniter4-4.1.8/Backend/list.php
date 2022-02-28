<?php
require 'connect.php';
error_reporting(E_ERROR);
$players = []; 
$sql = "SELECT * FROM players";

if($result = mysql_query($con,$sql))
{
  $cr = 0;
  while($row = mysql_fetch_assoc($result)){
    $players[$cr]['Jno'] = $row['Jno'];
    $players[$cr]['Fname'] = $row['Fname'];
    $players[$cr]['Lname'] = $row['Lname'];
    $players[$cr]['Email'] = $row['Email'];
    $cr++;
  }

  echo json_encode($players);
}
else{
  http_response_code(422);
}

