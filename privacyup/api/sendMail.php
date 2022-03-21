<?php

if (
    (isset($_POST['userName']) && !empty(trim($_POST['userName']))) && 
    (isset($_POST['userEmail']) && !empty(trim($_POST['userEmail']))) && 
    (isset($_POST['userPhone']) && !empty(trim($_POST['userPhone']))) && 
    (isset($_POST['userSubject']) && !empty(trim($_POST['userSubject']))) && 
    (isset($_POST['userMessage']) && !empty(trim($_POST['userMessage'])))
) {
    $userName     = $_POST['userName'];
	$userEmail    = $_POST['userEmail'];
    $userPhone    = $_POST['userPhone'];
	$userSubject  = $_POST['userSubject'];
	$userMessage  = $_POST['userMessage'];

    $to           = "contato@privacyupconsulting.com";

    $subject      = "$userSubject - Contato via site Privacy UP";
    $message      = "<html>
                        <body>
                            <h1>Contato via site Privacy UP</h1>
                            <p>Nome: $userName</p>
                            <p>E-mail: $userEmail</p>
                            <p>Telefone: $userPhone</p>
                            <p>Assunto: $userSubject</p>
                            <p>Mensagem: $userMessage</p>
                        </body>
                    </html>";
    $header       = "From:".$userEmail."\r\n".
                    "Reply-To:".$userEmail."\r\n".
                    "X=Mailer:PHP/".phpversion()."\r\n".
                    "Content-type:text/html; charset=iso-8859-1";

    if (mail($to, $subject, $message, $header)) {
        echo("<script>window.location='../inicio/mensagem-enviada.html'</script>");
    } else {
        echo("Algo deu errado, e-mail não enviado...");
    }
}

?>