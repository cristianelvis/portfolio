<?php

if (
    (isset($_POST['orcamentoName']) && !empty(trim($_POST['orcamentoName']))) && 
    (isset($_POST['orcamentoEmail']) && !empty(trim($_POST['orcamentoEmail']))) && 
    (isset($_POST['orcamentoPhone']) && !empty(trim($_POST['orcamentoPhone']))) && 
    (isset($_POST['orcamentoSubject']) && !empty(trim($_POST['orcamentoSubject']))) && 
    (isset($_POST['orcamentoMessage']) && !empty(trim($_POST['orcamentoMessage'])))
) {
    $orcamentoName     = $_POST['orcamentoName'];
	$orcamentoEmail    = $_POST['orcamentoEmail'];
    $orcamentoPhone    = $_POST['orcamentoPhone'];
	$orcamentoSubject  = $_POST['orcamentoSubject'];
	$orcamentoMessage  = $_POST['orcamentoMessage'];

    $to           = "contato@privacyupconsulting.com";

    $subject      = "$orcamentoSubject - Contato via site Privacy UP";
    $message      = "<html>
                        <body>
                            <h1>Contato via site Privacy UP</h1>
                            <p>Nome: $orcamentoName</p>
                            <p>E-mail: $orcamentoEmail</p>
                            <p>Telefone: $orcamentoPhone</p>
                            <p>Assunto: $orcamentoSubject</p>
                            <p>Mensagem: $orcamentoMessage</p>
                        </body>
                    </html>";
    $header       = "From:".$orcamentoEmail."\r\n".
                    "Reply-To:".$orcamentoEmail."\r\n".
                    "X=Mailer:PHP/".phpversion()."\r\n".
                    "Content-type:text/html; charset=iso-8859-1";

    if (mail($to, $subject, $message, $header)) {
        echo("<script>window.location='../inicio/mensagem-enviada.html'</script>");
    } else {
        echo("Algo deu errado, e-mail não enviado...");
    }
}

?>