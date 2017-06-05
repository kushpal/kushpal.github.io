<?php
session_start();
require_once('Token.php');
if($_SERVER['REQUEST_METHOD']='POST'){
if(isset($_POST['account'],$_POST['amount'])){
$acc=$_POST['account'];
$amnt=$_POST['amount'];

if(!empty($acc) && !empty($amnt)){
echo "<h3 style='color:green;'>Your has been transfered successfuly !</h3>";
}
}


}