<?php

if(isset($_POST['email']) && !empty($_POST['email'])){
    
    $firstname = addslashes($_POST['firstname']);
    $lastname = addslashes($_POST['lastname']);
    $email = addslashes($_POST['email']);
    $telephone = addslashes($_POST['telephone']);
    $message = addslashes($_POST['message']);

$to = "castaldi.thomas@gmail.com";
$subject = "Contact Portfolio";
$body = "Nom : ".$firstname. " " .$lastname. "\r\n".
        "Email : ".$email. "\r\n".
        "Téléphone : ".$telephone. "\r\n".
        "Message : ".$message;
$header = "From:castaldi.thomas@gmail.com"."\r\n".
            "Reply-To:".$email."\e\n".
            "X=Mailer:PHP/".phpversion();

if(mail($to, $subject, $body, $header)){

    echo("Votre demande a bien été envoyée avec succès !");

}else{
    echo("Malheureusement, votre demande n'a pas pu être envoyée. Merci de réessayer");
}
}

?>