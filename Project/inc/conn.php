<?php

$conn = mysqli_connect('localhost','root','root','project');
if(!$conn){
     echo 'Fail: ' . mysqli_connect_error();
          }
?>