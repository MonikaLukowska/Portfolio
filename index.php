<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="bootstrap.css">
<title>Contact Us Form In Php</title>
<head>
<body>
 
    <div class="container">
       <div class="row">
            <div class="col-lg-6 m-auto">
               <div class="card mt-5">
                    <div class="card-title">
                        <h2 class="text-center py-2"> Contact Us </h2>
                        <hr>
                        <?php 
                            $Msg = "";
                            if(isset($_GET['error']))
                            {
                                $Msg = "Coś poszło nietak. Spróbuj jeszcze raz.";
                                echo '<div class="alert alert-danger">'.$Msg.'</div>';
                            }
                            if(isset($_GET['validation']))
                            {
                                $Msg = "Wszystie pola są wymagane. Twoja wiadomość nie została wysłana";
                                echo '<div class="alert alert-danger">'.$Msg.'</div>';
                            }
                        
 
                            if(isset($_GET['success']))
                            {
                                $Msg = " Twoja wiadomość została wysłana. ";
                                echo '<div class="alert alert-success">'.$Msg.'</div>';
                            }
                        
                        ?>
                    
</body>
</html>