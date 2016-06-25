<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body style="font-family: Arial, Helvetica, sans-serif">
        <p>Dear
            <?php echo $first_name . " " . $last_name ?>, <br><br>
            I can confirm your message has been successfully received.
            Expect a response within 24 hours.</p>
            <blockquote><b>From:</b>
                <?php echo "$first_name $last_name &lt;$email&gt; ";
                if($number != ""){
                    echo "- <em>$number</em>";
                }
                ?><br>
            <b>Subject:</b> <?php echo $subject ?> <br><br>
            <?php echo $message; ?></blockquote>
    </body>
</html>
