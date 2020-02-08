<?php
    if (isset($_POST["submit"])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $from = 'Fronaweb contactform'; 
        $to = 'kontakt@fronaweb.pl'; 
        $subject = 'Message from fronaweb.pl';
        $body ="From: $name\n E-Mail: $email\n Message:\n $message";

//checkbox validation
if(empty($_POST['check']))
{
    $checkbox_error = "Proszę odhacz zgodę na przetwarzanie Twoich danych";
    $error=true;
}
else
{
    $checkbox = $_POST['check'];
}


// If there are no errors, send the email
if (!$errName && !$errEmail && !$errMessage) {
    if (mail ($to, $subject, $body, $from)) {
        header("location:index.php?success");
    } else {
        header('location:index.php?error');
    }
}
    }
?>

