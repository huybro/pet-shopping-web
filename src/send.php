<?php

if(isset($_POST['subscribe'])) {
    $userEmail = $_POST['email'];
    if(filter_var($userEmail,FILTER_VALIDATE_EMAIL)) {
        $subject = "Thanks for subscribing us - KIMBINHMINH";
        $message = "Thanks for subscribing to our blog. You'll always receive latest updates from us";
        $_sender = "From: caogiahuy615@gmail.com";
        if(mail($userEmail, $subject, $nessage, $_sender)){
            ?>
           <!-- show sucess message once email send successfully -->
          <div class="alert success-alert">
            <?php echo "Thanks for Subscribing us." ?>
          </div>
          <?php
          $userEmail = "";
        }else{
          ?>
          <!-- show error message if somehow mail can't be sent -->
          <div class="alert error-alert">
          <?php echo "Failed while sending your mail!" ?>
          </div>
          <?php
        }
      }else{
        ?>
        <!-- show error message if user entered email is not valid -->
        <div class="alert error-alert">
          <?php echo "$userEmail is not a valid email address!" ?>
        </div>
        <?php
      }
    }
    ?>
