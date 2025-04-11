<?php
$conn=mysqli_connect("localhost","root","","music_user");
if(!$conn) echo mysqli_error($conn);

$username=$_POST['user_name'];
$pass=$_POST['user_password'];

$sql="SELECT * FROM `user_input` WHERE `user`='$username'";
$result=mysqli_query($conn,$sql);
// if(!$result) echo mysqli_error();
$row=mysqli_fetch_assoc($result);
$act_pass=$row['password'];

echo $pass;
echo $act_pass;

if (mysqli_num_rows($result)>0&& $pass==$act_pass) {
    header("location:home.html");
}
else{
    header("location:index.htm");
}

?>