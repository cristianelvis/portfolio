<?php
    require_once ('phpmailer/PHPMailer.php');
    require_once ('phpmailer/Exception.php');
    require_once ('phpmailer/SMTP.php');

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'cristianelvis.privacyup@gmail.com';                     //SMTP username
        $mail->Password = '01Escolh@s01';
        $mail->Port = 587;

        //Recipients
        $mail->addAddress('cristianelvisdesign@gmail.com', 'PrivacyUP');
        $mail->setFrom($_POST['userEmail'], $_POST['userName']);
        $mail->addReplyTo($_POST['userEmail'], $_POST['userName']);

        //Content
        $mail->isHTML(true);
        $mail->Subject = 'Contato via site: '.$_POST['userSubject'];
        $mail->Body    = 'Contato através do site <b>Privacy up</b><br>
                            Nome: '.$_POST['userName']'<br>
                            E-mail: '.$_POST['userEmail'].'<br>
                            Contato: '.$_POST['userPhone'].'<br>
                            Assunto: '.$_POST['userSubject'].'<br>
                            Menssagem: '.$_POST['userMessage'].'';

        if ($mail->send()) {
            echo ("<script>window.location='../mensagem-enviada/'</script>");
        } else {
            echo ("Algo deu errado, e-mail não enviado... {$mail->ErrorInfo}");
        }

    } catch (Exception $e) {
        echo "Erro ao enviar: {$mail->ErrorInfo}";
    }
?>