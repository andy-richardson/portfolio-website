<?php
    // TO DO:
      // - Move files to res/php
      // - Submit button calibrate
      // - ensure forms are cleared before submission (prevent duplicate email)
    require 'reference.php';

    // Input
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $number = isset($_POST['number']) ? $_POST['number'] : "";
    $subject = "Enquiry #$id: " . $_POST['subject'];
    $message = $_POST['message'];

    // Generate emails
    ob_start();
    include('confirm.php');
    $confirm = ob_get_contents();
    ob_end_clean();

    ob_start();
    include('send.php');
    $send = ob_get_contents();
    ob_end_clean();

    // Set headers
    $headers = "From: Andy The Developer <contact@andythedeveloper.com>\r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

    // Calibrate for next email
    $newId = $id + 1;
    $refFile = fopen('reference.php', 'w');
    fwrite($refFile, '<?php $id='.$newId.'?>');
    fclose($refFile);

    // Send mail
	 mail($email, $subject, $confirm, $headers);


	 $headers = "From: $first_name $last_name <$email>\r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
	 mail('andy', $subject, $send, $headers);
 ?>
