<?php
$conn=mysqli_connect("localhost","root","","music_user");
if(!$conn) echo mysqli_error($conn);

$name=$_POST['user_name'];
$email=$_POST['user_email'];
$pass=$_POST['user_password'];

$sql="INSERT INTO `user_input` (`user`, `email`, `password`, `dt`) VALUES ('$name', '$email', '$pass', current_timestamp())";
$result=mysqli_query($conn,$sql);
if(!$result) echo mysqli_error();

header("location:index.htm");
?>