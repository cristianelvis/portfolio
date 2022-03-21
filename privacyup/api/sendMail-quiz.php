<?php

if (
    (isset($_POST['quizSubject']) && !empty(trim($_POST['quizSubject']))) &&
    (isset($_POST['userName']) && !empty(trim($_POST['userName']))) &&
    (isset($_POST['userEmail']) && !empty(trim($_POST['userEmail']))) &&
    (isset($_POST['userPhone']) && !empty(trim($_POST['userPhone']))) &&
    (isset($_POST['userSetor']) && !empty(trim($_POST['userSetor']))) &&
    (isset($_POST['userQtaFuncionarios']) && !empty(trim($_POST['userQtaFuncionarios']))) &&
    (isset($_POST['question1']) && !empty(trim($_POST['question1']))) &&
    (isset($_POST['question2']) && !empty(trim($_POST['question2']))) &&
    (isset($_POST['question3']) && !empty(trim($_POST['question3']))) &&
    (isset($_POST['question4']) && !empty(trim($_POST['question4']))) &&
    (isset($_POST['question5']) && !empty(trim($_POST['question5']))) &&
    (isset($_POST['question6']) && !empty(trim($_POST['question6']))) &&
    (isset($_POST['score'])) &&
    (isset($_POST['userMessage']) && !empty(trim($_POST['userMessage'])))
) {
    $quizSubject         = $_POST['quizSubject'];
    $userName            = $_POST['userName'];
	$userEmail           = $_POST['userEmail'];
    $userPhone           = $_POST['userPhone'];
    $userSetor           = $_POST['userSetor'];
    $userQtaFuncionarios = $_POST['userQtaFuncionarios'];
    $question1           = $_POST['question1'];
    $question2           = $_POST['question2'];
    $question3           = $_POST['question3'];
    $question4           = $_POST['question4'];
    $question5           = $_POST['question5'];
    $question6           = $_POST['question6'];
    $score               = $_POST['score'];
	$userMessage         = $_POST['userMessage'];

    $to = "cristianelvisdesign@gmail.com";

    $subject = "$quizSubject - via site Privacy UP";
    $message = "<!DOCTYPE html>
    <html lang='pt-br'>
        <head>
            <meta charset='utf-8'></head>
                                <body>
                                    <h1>$quizSubject - Via site Privacy UP</h1>
                                    <hr>
                                    <h3>Usuário que participou do Quiz:</h3>
                                    <p>Nome: $userName<br>
                                    E-mail: $userEmail<br>
                                    Telefone: $userPhone</p>
                                    <p>Setor da empresa: $userSetor<br>
                                    Quantidade de funcionários: $userQtaFuncionarios</p>
                                    <hr>
                                    <h3>Respondeu da seguinte forma:</h3>
                                    <p>No desempenho de suas atividades, a empresa armazena dados pessoais - de clientes, funcionários e/ou fornecedores?<br>Usuário respondeu: $question1</p>
                                    <p>A empresa solicita o consentimento específico para coleta, tratamento de dados e/ou ações de marketing?<br>Usuário respondeu: $question2</p>
                                    <p>A empresa conta atualmente com uma política de dados de cibersegurança e proteção e privacidade de dados?<br>Usuário respondeu: $question3</p>
                                    <p>A empresa possui ações/treinamentos recorrentes visando a conscientização dos colaboradores sobre a importância da segurança de dados?<br>Usuário respondeu: $question4</p>
                                    <p>A empresa conta, atualmente, com planos de resposta a incidentes e remediações no caso de vazamento dos dados?<br>Usuário respondeu: $question5</p>
                                    <p>A empresa possui um Encarregado de Proteção de Dados Nomeado (DPO)?<br>Usuário respondeu: $question6</p>
                                    <hr>
                                    <h3>Obteve o seguinte resultado:</h3>
                                    <p>$score</p>
                                    <hr>
                                    <h3>Após responder, deixou está menagem:</h3>
                                    <p>Mensagem: $userMessage</p>
                                </body>
                            </html>";
    $header = "From:".$userEmail."\r\n".
                    "Reply-To:".$userEmail."\r\n".
                    "X=Mailer:PHP/".phpversion()."\r\n".
                    "Content-type:text/html; charset=iso-8859-1";

    if (mail($to, $subject, $message, $header)) {
        echo("<script>window.location='../inicio/quiz-enviada.html'</script>");
    } else {
        echo("Algo deu errado, e-mail não enviado...");
    }
}

?>