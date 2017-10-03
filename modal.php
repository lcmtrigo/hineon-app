<?php

function alert($msg) {
    echo "<script type='text/javascript'>alert('$msg');</script>";
}

// define variables

$modalName = $_POST["modalName"];
$modalEmail = $_POST["modalEmail"];

if(isset($_POST["modalSubmit"]))

{   if (empty($_POST["modalName"])) {
      alert("Please provide a name!");
     } else if (empty($_POST["modalEmail"])) {
      alert("Please provide a contact email!");
    } // check if e-mail address is well-formed
     else if (!filter_var($modalEmail, FILTER_VALIDATE_EMAIL)) {
        // $emailErr = "Invalid email format";
      alert("Invalid email format!") ;
    } 
    else {
      $email_subject = "[HiNeon] Here's your design screenshot!";
      $email_body = "Here is a screenshot of your Neon sign design!\n \n ".
      "Thanks for your interest blah blah blah \n To order your sign, please visit https://www.hineon.com";

      $headers = "Ideally here should be the screenshot. \n ";

      mail($modalEmail,$email_subject,$email_body,$headers);

      alert("Your screenshot has been e-mailed!");
      }
}

?>

