<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', ' ');
define('DB_NAME', 'BackEnd');

function connect()
{
  $connect = mysql_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

  if (mysql_connect_error($connect)){
    die("Error connecting to database" . mysql_connect_error());
  }
  mysql_set_charset($connect,"utf8");

  return $connect;  
}
$con = connect();