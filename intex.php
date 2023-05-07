<?php
  if(isset($_POST['submit'])){
    $to = "youremail@example.com"; // your email address
    $from = $_POST['email']; // sender's email address
    $name = $_POST['name']; // sender's name
    $subject = "Portfolio Contact Form"; // email subject line
    $message = $name . " sent you a message: \n\n" . $_POST['message']; // email message
    
    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
  }
?>
