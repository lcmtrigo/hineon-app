<?php

function alert($msg) {
    echo "<script type='text/javascript'>alert('$msg');</script>";
}

// define variables and set to empty values
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
$gender = $_POST["gender"];

if(isset($_POST["submit"]))

{

    if (empty($_POST["name"])) {
      echo("nameee");
     } else if (empty($_POST["email"])) {
      echo("email");
    } else if (empty($_POST["message"])) {
      echo("message");
    } else if (empty($_POST["gender"])) {
      echo("gender");
    }// check if e-mail address is well-formed
    else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // $emailErr = "Invalid email format";
      alert("Invalid email format") ;
    } else {
      $to = 'backtonext9@gmail.com';
      $email_subject = "Contact form submission: $name";
      $email_body = "You have received a new message. ".

      " Here are the details:\n Name: $name \n ".
      "Email: $email\n Message: \n $message Gender: \n $gender";

      $headers = "From: $to\n";
      $headers .= "Reply-To: $email";

      mail($to,$email_subject,$email_body,$headers);

      echo("Thanks");
      }
}

?>


<!DOCTYPE html>
<html>
<head>
  <title>Experiment</title>

<style>

.slides
  {
  height: 100px;
}

</style>
 <link rel="stylesheet" href="bxslider/bxslider.css">
</head>
   
<body>

<section id="formTest">
<form action="mail_handler.php" method="post">
Name: <input type="text" name="name"><br>
Email: <input type="text" name="email"><br>
Message:<br><textarea rows="5" name="message" cols="30"></textarea><br>
Gender:<input type="radio" id="female" name="gender" value="female">female <input type="radio" id="male" name="gender" value="male">male
<input type="submit" name="submit" value="Submit">
</form>
</section>
</body>


</html>