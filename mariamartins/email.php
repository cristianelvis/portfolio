<?php

if(isset($_POST['email'])&& !empty($_POST['email']))


$nome = addcslashes($_POST['nome']);
$email = addcslashes($_POST['email']);
$telefone = addcslashes($_POST['fone']);
$mensagem = addcslashes($_POST['message']);

$to = "az.junior@hotmail.com";
$subjet = "Campanha 2020";
$body = "Nome:"	.$nome. "/n".
		"Email:" .$email. "/n".
		"Telefone:" .$fone. "/n".
		"Mensagem:" .$message;
$header = "From:az.junior@hotmail.com". "/r/n". "reply-to:".$email."/r/n" ."x=mailer:php/".phpversion();

if(mail($to,$subjet,$body,$header)){
	echo("Email enviado com sucesso !");
}else{
	echo("Erro no envio da mensagem")";"
}
	
	
	
?>