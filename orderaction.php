<?php

function alert($msg) {
    echo "<script type='text/javascript'>alert('$msg');</script>";
}

// define variables

$clientText = $_POST["clientText"];
$font = $_POST["chooseFont"];
$size = $_POST["chooseFontSize"];
$align = $_POST["chooseFontAlign"];
$color = $_POST["chooseColor"];
$setting = $_POST["chooseIndoorOutdoor"];
$shape = $_POST["chooseShape"];
$installation = $_POST["chooseNails"];
$qty = $_POST["orderQuantity"];
$name = $_POST["fullName"];
$email = $_POST["orderEmail"];
$zipcode = $_POST["orderZip"];
$country = $_POST["orderCountry"];
$comment = $_POST["orderComment"];

$modalName = $_POST["modalName"];
$modalEmail = $_POST["modalEmail"];

if(isset($_POST["quote"])) {

    if (empty($_POST["fullName"])) {
      alert("Please provide a name!");
     } else if (empty($_POST["orderEmail"])) {
      alert("Please provide a contact email!");
    } else if (empty($_POST["clientText"])) {
      alert("Please type in your Sign text!");
    } else if (empty($_POST["chooseFont"])) {
      alert("Please select a font!");
    } else if (empty($_POST["chooseFontSize"])) {
      alert("Please select a font size!");
    } else if (empty($_POST["chooseFontAlign"])) {
      alert("Please select a text alignment!");
    } else if (empty($_POST["chooseColor"])) {
      alert("Please select a color!");
    } else if (empty($_POST["chooseIndoorOutdoor"])) {
      alert("Please select a setting!");
    } else if (empty($_POST["chooseShape"])) {
      alert("Please select a backdrop shape!");
    } else if (empty($_POST["chooseNails"])) {
      alert("Please select an installation method!");
    } else if (empty($_POST["orderQuantity"])) {
      alert("Please provide the quantity of your order!");
    } else if (empty($_POST["orderZip"])) {
      alert("Please provide a zip code!");
    } else if (empty($_POST["orderCountry"])) {
      alert("Please select a country!");
    } // check if e-mail address is well-formed
    else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // $emailErr = "Invalid email format";
      alert("Invalid email format!") ;
    } 
    else {
      $to = 'backtonext9@gmail.com';
      $email_subject = "[HiNeon] New quote requested from: $name";
      $email_body = "$name requested quote for the following:\n \n ".

      "Name: $name \n ".
      "Email: $email\n \n Sign Text: \n $clientText\n \n Font: $font\n Size: $size\n Alignment: $align \n Color: $color \n Setting: $setting \n Backdrop: $shape \n Installation Method: $installation \n ".
      "Quantity: $qty \n Zipcode: $zipcode \n Country: $country";

      $headers = "Message generated from: HiNeon custom order form\n";
      $headers .= "Customer contact: $email";

      mail($to,$email_subject,$email_body,$headers);
      }
}

// else if(isset($_POST["purchase"])) {

// alert("Purchase clicked")

// } 


?>
