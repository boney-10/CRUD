<?php
require 'connect.php';

$postdate = file_get_contents("php://input");
 
if(isset($postdate) && !empty($postdate)){
  $request = json_decode($postdate);

  $Fname = $request->Fname;
  $Lname = $request->Lname;
  $Email = $request->Email;

  $sql = "INSERT INTO 'Players'(
    'Fname',
    'Lname',
    'Email',
    ) VALUES ('{$Fname}', '{$Lname}', '{$Email}')";

    if(mysql_query($con,$sql)){
      http_response_code(201);
    }
    else{
      http_response_code(422);
    }
}