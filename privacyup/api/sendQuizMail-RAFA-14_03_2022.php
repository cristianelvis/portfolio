<?php

if (
    (isset($_POST['score']) && !empty(trim($_POST['score']))) && 
    (isset($_POST['question1']) && !empty(trim($_POST['question1']))) && 
    (isset($_POST['question2']) && !empty(trim($_POST['question2']))) && 
    (isset($_POST['question3']) && !empty(trim($_POST['question3']))) && 
    (isset($_POST['userName']) && !empty(trim($_POST['userName']))) && 
    (isset($_POST['userEmail']) && !empty(trim($_POST['userEmail']))) && 
    (isset($_POST['userPhone']) && !empty(trim($_POST['userPhone']))) && 
    (isset($_POST['userMessage']) && !empty(trim($_POST['userMessage']))) &&
    (isset($_POST['userCompanySector']) && !empty(trim($_POST['userCompanySector']))) &&
    (isset($_POST['usersNumbersEmployees']) && !empty(trim($_POST['usersNumbersEmployees']))) 
) {
    $score          = $_POST['score'];
    $question1      = $_POST['question1'];
    $question2      = $_POST['question2'];
    $question3      = $_POST['question3'];
    $userName       = $_POST['userName'];
    $userPhone      = $_POST['userPhone'];
	$userEmail      = $_POST['userEmail'];
	$userCompanySector  = $_POST['userCompanySector'];
	$userNumbersEmployees  = $_POST['usersNumbersEmployees'];
	$userMessage  = $_POST['userMessage'];

    $to           = "cristianelvisdesign@gmail.com";

    $subject      = "Quiz - via site Privacy UP";
    $message      = "<html>
                        <body>
                            <h1>Quiz via site Privacy UP</h1>
                            <p>Resultado: $score</p>
                            <p>Pergunta 1: $question1</p>
                            <p>Pergunta 2: $question2</p>
                            <p>Pergunta 3: $question3</p>
                            <p>Nome: $userName</p>
                            <p>Telefone: $userPhone</p>
                            <p>E-mail: $userEmail</p>
                            <p>Setor da empresa: $userCompanySector</p>
                            <p>Qtde de funcionários: $userNumbersEmployees</p>
                            <p>Deixe uma mensagem: $userMessage</p>                           
                        </body>
                    </html>";
    $header       = "From:".$userEmail."\r\n".
                    "Reply-To:".$userEmail."\r\n".
                    "X=Mailer:PHP/".phpversion()."\r\n".
                    "Content-type:text/html; charset=iso-8859-1";
    
    header('Content-Type: application/json');
    
    exit(json_encode(['message' => mail($to, $subject, $message, $header)
        ? 'Mensagem enviada com sucesso!' 
        : 'Algo deu errado, e-mail não enviado...'])
    );

}