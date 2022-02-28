<?php

require 'connect.php';
$id=$_GET['id'];

echo $sql = "DELETE FROM 'Players' WHERE 'Jno'='{$id}' LIMIT 1";

if(mysql_query($con, $sql))
{
  http_response_code(201);
}
else{
  return http_response_code(500);
}