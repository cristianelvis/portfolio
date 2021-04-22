<?php
// Check for empty fields
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = "contato@geniosconsultoria.com"; // Add your email address inbetween the "" - This is where the form will send a message to.
$subject = "$name - Contato através do site Gênios Consultoria";
$body = "Esta mensagem foi enviada através do site Gênios Consultoria.\n\n"."Aqui os detalhes:\n\nNome: $name\n\nE-mail: $email\n\nNúmero de contato: $phone\n\nMensagem:\n$message";
$header = "From: noreply@geniosconsultoria.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$header .= "Reply-To: $email";	

if(!mail($to, $subject, $body, $header))
  http_response_code(500);
?>
