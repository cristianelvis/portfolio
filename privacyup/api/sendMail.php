<?php
    require 'phpmailer/PHPMailer.php';
    require 'phpmailer/Exception.php';
    require 'phpmailer/SMTP.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->Host       = "smtp.gmail.com";
    $mail->SMTPAuth   = "true";
    $mail->SMTPSecure = "tls";
    $mail->Port       = "587";
    $mail->Username   = "cristianelvis.privacyup@gmail.com";
    $mail->Password   = "01Escolh@s01";

if (
    (isset($_POST['userName']) && !empty(trim($_POST['userName']))) && 
    (isset($_POST['userEmail']) && !empty(trim($_POST['userEmail']))) && 
    (isset($_POST['userPhone']) && !empty(trim($_POST['userPhone']))) && 
    (isset($_POST['userSubject']) && !empty(trim($_POST['userSubject']))) && 
    (isset($_POST['userMessage']) && !empty(trim($_POST['userMessage'])))
) {
    $userName    = $_POST['userName'];
	$userEmail   = $_POST['userEmail'];
    $userPhone   = $_POST['userPhone'];
	$userSubject = $_POST['userSubject'];
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
