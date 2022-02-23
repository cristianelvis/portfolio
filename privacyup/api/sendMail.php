<?php

if (
    (isset($_POST['userEmail']) && !empty(trim($_POST['userEmail']))) && 
    (isset($_POST['userPhone']) && !empty(trim($_POST['userPhone']))) && 
    (isset($_POST['userMessage']) && !empty(trim($_POST['userMessage'])))
) {

    $userName = !empty($_POST['userName']) ? utf8_decode($_POST['userName']) : "Nome nao informado";
	$userEmail = $_POST['userEmail'];
    $userPhone = $_POST['userPhone'];
	$userSubject = !empty($_POST['userSubject']) ? utf8_decode($_POST['userSubject']) : "Assunto não informado";
	$userMessage = $_POST['userMessage'];

    $to           = "cristianelvisdesign@gmail.com";

    $subject      = "$userSubject - Mensagem enviada via site Privacy UP";
    $body         = "Nome: ".$userName. "\r\n".
                    "E-mail: ".$userEmail. "\r\n".
                    "Telefone: ".$userPhone. "\r\n".
                    "Mensagem: ".$userMessage. "\r\n";
    $header       = "From:".$userEmail."\r\n".    
                    "Reply-To:".$userEmail."\r\n".
                    "X=Mailer:PHP/".phpversion();

    if (mail($to,$subject,$body,$header)) {
        echo("<script>window.location='../mensagem-enviada/'</script>");
    } else {
        echo("Algo deu errado, e-mail não enviado...");
    }
} else {
    echo("<script>window.location='../mensagem-nao-enviada/'</script>");
}
?>
